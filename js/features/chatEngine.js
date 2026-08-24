import { mockChats, actionMenuHTML, voiceIconHTML, sendIconHTML } from '../data/mockData.js';

export function initChatEngine() {
    const chatItems = document.querySelectorAll('.chat-item');
    const newChatBtns = document.querySelectorAll('.action-new-chat');
    const mainContent = document.querySelector('#mainContent');
    const chatStream = document.querySelector('#chatStream');
    const welcomeTitle = document.querySelector('#welcomeTitle');
    const suggestionsBox = document.querySelector('#suggestionsBox');
    const disclaimerText = document.querySelector('#disclaimerText');
    const messageInput = document.querySelector('#messageInput');
    const sendBtn = document.querySelector('#sendBtn');
    const sendBtnIcon = document.querySelector('#sendBtnIcon');
    const composerContainer = document.querySelector('#composerContainer');
    const filePreviewContainer = document.querySelector('#filePreviewContainer');
    const sidebar = document.querySelector('#sidebar');
    const sidebarOverlay = document.querySelector('#sidebarOverlay');

    const resetComposer = () => {
        messageInput.value = '';
        messageInput.style.height = 'auto';
        sendBtn.classList.remove('send-active');
        sendBtnIcon.innerHTML = voiceIconHTML;
        composerContainer.classList.remove('is-multiline');
        filePreviewContainer.innerHTML = '';
        if (!mainContent.classList.contains('chat-mode')) {
            suggestionsBox.classList.remove('hide-suggestions', 'hide-suggestions-collapse');
        }
    };

    chatItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.chat-actions')) return;
            document.querySelectorAll('.chat, .chat-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            }

            const chatId = item.dataset.chatId;
            if (mockChats[chatId]) {
                startChatUI();
                chatStream.innerHTML = `
                    <div class="message user">
                        <div class="bubble">${mockChats[chatId].user.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
                    </div>
                    <div class="message ai">
                        <div class="bubble">${mockChats[chatId].ai}</div>
                        ${actionMenuHTML}
                    </div>
                `;
                setTimeout(() => chatStream.scrollTop = chatStream.scrollHeight, 50);
                resetComposer();
            }
        });
    });

    newChatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.chat, .chat-item').forEach(el => el.classList.remove('active'));
            document.querySelector('.sidebar__top .chat.action-new-chat').classList.add('active');
            
            mainContent.classList.remove('chat-mode');
            chatStream.classList.add('hidden');
            welcomeTitle.classList.remove('hidden');
            disclaimerText.classList.add('hidden');
            chatStream.innerHTML = '';
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('mobile-open');
                sidebarOverlay.classList.remove('active');
            }
            resetComposer();
        });
    });

    function startChatUI() {
        mainContent.classList.add('chat-mode');
        welcomeTitle.classList.add('hidden');
        suggestionsBox.classList.add('hide-suggestions-collapse');
        chatStream.classList.remove('hidden');
        disclaimerText.classList.remove('hidden');
    }

    messageInput.addEventListener('input', function() {
        composerContainer.classList.remove('is-multiline');
        this.style.height = 'auto';
        
        if (this.scrollHeight > 40 || this.value.includes('\n')) {
            composerContainer.classList.add('is-multiline');
        }
        
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        
        if (this.value.trim() !== '') {
            sendBtn.classList.add('send-active');
            sendBtnIcon.innerHTML = sendIconHTML;
            if (!mainContent.classList.contains('chat-mode')) {
                suggestionsBox.classList.add('hide-suggestions');
            }
        } else {
            sendBtn.classList.remove('send-active');
            sendBtnIcon.innerHTML = voiceIconHTML;
            if (!mainContent.classList.contains('chat-mode')) {
                suggestionsBox.classList.remove('hide-suggestions');
            }
        }
    });

    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleUserSubmit();
        }
    });

    sendBtn.addEventListener('click', () => {
        if (messageInput.value.trim() !== '') handleUserSubmit();
    });

    function handleUserSubmit() {
        const text = messageInput.value.trim();
        if (!text) return;

        startChatUI();
        document.querySelectorAll('.chat, .chat-item').forEach(el => el.classList.remove('active'));

        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.innerHTML = `<div class="bubble">${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`;
        chatStream.appendChild(userMsg);

        resetComposer();

        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai';
        aiMsg.id = 'ai-load-' + Date.now();
        aiMsg.innerHTML = `<div class="bubble"><span class="typing-indicator"></span></div>`;
        chatStream.appendChild(aiMsg);
        
        chatStream.scrollTop = chatStream.scrollHeight;

        setTimeout(() => {
            const loadedAiMsg = document.querySelector('#' + aiMsg.id);
            if (loadedAiMsg) {
                loadedAiMsg.querySelector('.bubble').innerHTML = `<p class="chat-desc">This is a simulated AI response. You asked: <em>"${text}"</em></p>`;
                const actionsDiv = document.createElement('div');
                actionsDiv.innerHTML = actionMenuHTML;
                loadedAiMsg.appendChild(actionsDiv.firstElementChild);
                chatStream.scrollTop = chatStream.scrollHeight;
            }
        }, 1200);
    }

    chatStream.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('.copy-code-btn') || e.target.closest('.copy-btn');
        if (copyBtn) {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
            setTimeout(() => { copyBtn.innerHTML = originalHTML; }, 2000);
        }

        if (e.target.closest('.like-btn')) {
            e.target.closest('.like-btn').classList.toggle('active');
            e.target.closest('.message-actions').querySelector('.dislike-btn').classList.remove('active');
        }
        if (e.target.closest('.dislike-btn')) {
            e.target.closest('.dislike-btn').classList.toggle('active');
            e.target.closest('.message-actions').querySelector('.like-btn').classList.remove('active');
        }

        if (e.target.closest('.regenerate-btn')) {
            const msgElement = e.target.closest('.message.ai');
            msgElement.querySelector('.message-actions').remove();
            msgElement.querySelector('.bubble').innerHTML = '<span class="typing-indicator"></span>';
            setTimeout(() => {
                msgElement.querySelector('.bubble').innerHTML = `<p class="chat-desc">This is a regenerated mock response based on your action.</p>`;
                const actionsDiv = document.createElement('div');
                actionsDiv.innerHTML = actionMenuHTML;
                msgElement.appendChild(actionsDiv.firstElementChild);
            }, 1000);
        }
    });

    document.querySelectorAll('.sugg-close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.closest('.suggestions__btn').remove();
        });
    });
}