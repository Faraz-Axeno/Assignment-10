export function initModal() {
    const searchModal = document.querySelector('#searchModal');
    const searchInputElem = document.querySelector('#searchInput');
    const closeSearchModalBtn = document.querySelector('#closeSearchModal');
    const searchTriggerBtns = document.querySelectorAll('.action-search-modal');
    const sidebar = document.querySelector('#sidebar');
    const sidebarOverlay = document.querySelector('#sidebarOverlay');
    const recentItems = document.querySelectorAll('.recent-item');

    if (searchInputElem) {
        searchInputElem.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            recentItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

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

    const settingsModal = document.querySelector('#settingsModal');
    const settingsMenuBtn = document.querySelector('#settingsMenuBtn');
    const closeSettingsModalBtn = document.querySelector('#closeSettingsModal');
    const settingsSearchInput = document.querySelector('#settingsSearchInput');
    const settingsNavItems = document.querySelectorAll('.settings-nav-item');
    const settingsContentTitle = document.querySelector('#settingsContentTitle');
    const closeMfaBanner = document.querySelector('#closeMfaBanner');
    const mfaBanner = document.querySelector('#mfaBanner');

    if (settingsMenuBtn && settingsModal) {
        settingsMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            settingsModal.classList.remove('hidden');
            const userDropdown = document.querySelector('#userDropdown');
            if (userDropdown) userDropdown.classList.add('hidden');
        });
    }

    if (closeSettingsModalBtn) {
        closeSettingsModalBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));
    }

    if (closeMfaBanner && mfaBanner) {
        closeMfaBanner.addEventListener('click', () => {
            mfaBanner.style.display = 'none';
        });
    }

    settingsNavItems.forEach(item => {
        item.addEventListener('click', () => {
            settingsNavItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            if (settingsContentTitle) {
                settingsContentTitle.textContent = item.querySelector('span').textContent;
            }
        });
    });

    if (settingsSearchInput) {
        settingsSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            settingsNavItems.forEach(item => {
                const text = item.querySelector('span').textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchModal && !searchModal.classList.contains('hidden')) searchModal.classList.add('hidden');
            if (settingsModal && !settingsModal.classList.contains('hidden')) settingsModal.classList.add('hidden');
        }
    });

    [searchModal, settingsModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.add('hidden');
            });
        }
    });

    recentItems.forEach(item => {
        item.addEventListener('click', () => searchModal.classList.add('hidden'));
    });
}