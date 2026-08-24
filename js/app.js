import { initSidebar } from './ui/sidebar.js';
import { initDropdowns } from './ui/dropdowns.js';
import { initModal } from './ui/modal.js';
import { initAttachment } from './ui/attachment.js';
import { initChatEngine } from './features/chatEngine.js';

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const el = e.target;
            if (el.getAttribute('role') === 'button' || el.classList.contains('chat-item') || el.classList.contains('chat') || el.classList.contains('recent-item')) {
                e.preventDefault();
                el.click();
            }
        }
    });
    initSidebar();
    initDropdowns();
    initModal();
    initAttachment();

    // Initialize Core Feature Modules
    initChatEngine();
});