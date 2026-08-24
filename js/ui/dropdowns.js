export function initDropdowns() {
    const closeAllDropdowns = () => {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.add('hidden');
        });
    };

    const toggleDropdown = (buttonSelector, dropdownSelector) => {
        const button = document.querySelector(buttonSelector);
        const dropdown = document.querySelector(dropdownSelector);
        
        if (button && dropdown) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const isCurrentlyHidden = dropdown.classList.contains('hidden');
                closeAllDropdowns();
                if (isCurrentlyHidden) dropdown.classList.remove('hidden');
            });
        }
    };

    toggleDropdown('#attachmentBtn', '#attachmentDropdown');
    toggleDropdown('#modelBtn', '#modelDropdown');
    toggleDropdown('#mobileModelTrigger', '#mobileModelDropdown');
    toggleDropdown('#userMenuBtn', '#userDropdown');

    document.addEventListener('click', (e) => {
        const dotsBtn = e.target.closest('.dots-btn') || e.target.closest('.msg-more-btn');
        if (dotsBtn) {
            e.stopPropagation();
            closeAllDropdowns();
            const dropdown = dotsBtn.nextElementSibling;
            if (dropdown && dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden');
            }
            return;
        }
        
        if (e.target.closest('.dropdown-menu') && !e.target.closest('.menu-item')) {
            return; 
        }
        
        closeAllDropdowns();
    });

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            if (e.target.closest('.menu-item')) {
                menu.classList.add('hidden');
            } else {
                e.stopPropagation(); 
            }
        });
    });

    const updateModelSelection = (selectedText) => {
        const desktopLabel = document.querySelector('#selectedModelText');
        const mobileLabel = document.querySelector('#mobileModelLabel');
        if (desktopLabel) desktopLabel.textContent = selectedText;
        if (mobileLabel) mobileLabel.textContent = selectedText;
    };

    document.querySelectorAll('#modelDropdown .menu-item, #mobileModelDropdown .menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('#modelDropdown .menu-item, #mobileModelDropdown .menu-item').forEach(btn => btn.classList.remove('active'));
            item.classList.add('active');
            const selectedText = item.querySelector('.model-name').textContent.trim();
            updateModelSelection(selectedText);
        });
    });
}