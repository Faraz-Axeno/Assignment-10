export function initModal() {
    const searchModal = document.querySelector('#searchModal');
    const searchInputElem = document.querySelector('#searchInput');
    const closeSearchModalBtn = document.querySelector('#closeSearchModal');
    const searchTriggerBtns = document.querySelectorAll('.action-search-modal');
    const sidebar = document.querySelector('#sidebar');
    const sidebarOverlay = document.querySelector('#sidebarOverlay');

    searchTriggerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            searchModal.classList.remove('hidden');
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            }
            setTimeout(() => searchInputElem.focus(), 50);
        });
    });

    if (closeSearchModalBtn) {
        closeSearchModalBtn.addEventListener('click', () => searchModal.classList.add('hidden'));
    }

    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) searchModal.classList.add('hidden');
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            searchModal.classList.add('hidden');
        }
    });

    document.querySelectorAll('.recent-item').forEach(item => {
        item.addEventListener('click', () => searchModal.classList.add('hidden'));
    });
}