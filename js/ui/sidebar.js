export function initSidebar() {
    const sidebar = document.querySelector('#sidebar');
    const closeSidebarBtn = document.querySelector('#closeSidebarBtn');
    const expandSidebarBtn = document.querySelector('#expandSidebarBtn');
    const mobileToggleBtn = document.querySelector('#mobileToggleBtn');
    const sidebarOverlay = document.querySelector('#sidebarOverlay');

    if (mobileToggleBtn && sidebarOverlay) {
        mobileToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            sidebarOverlay.classList.add('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            } else {
                sidebar.classList.add('is-collapsed');
            }
        });
    }

    if (expandSidebarBtn) {
        expandSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('is-collapsed');
        });
    }
}