document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. SIDEBAR & MOBILE OVERLAY MANAGEMENT
    // ==========================================
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

    // ==========================================
    // 2. ACCESSIBILITY: Enter Key Click Trigger
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const el = e.target;
            if (el.getAttribute('role') === 'button' || el.classList.contains('chat-item') || el.classList.contains('chat') || el.classList.contains('recent-item')) {
                e.preventDefault();
                el.click();
            }
        }
    });

    // ==========================================
    // 3. GLOBAL DROPDOWN LOGIC
    // ==========================================
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

    // ==========================================
    // 4. SEARCH MODAL LOGIC
    // ==========================================
    const searchModal = document.querySelector('#searchModal');
    const searchInputElem = document.querySelector('#searchInput');
    const closeSearchModalBtn = document.querySelector('#closeSearchModal');
    const searchTriggerBtns = document.querySelectorAll('.action-search-modal');

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

    // ==========================================
    // 5. MODEL SELECTOR UPDATE
    // ==========================================
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

    // ==========================================
    // 6. SVG ICONS & MOCK DATA
    // ==========================================
    const voiceIconHTML = `<img src="assets/icons/voice.svg" alt="voice icon" class="icon-img voice-img" />`;
    const sendIconHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;
    const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    const likeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`;
    const dislikeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path></svg>`;
    const regenIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>`;
    const moreIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-svg"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

    const mockChats = {
        'figma': {
            user: "// 13. Repeat String\nfunction repeatString(str) {\n    // TODO: Write code to repeat the string twice (2x)\n    return str+str;\n}",
            ai: `
                <p class="chat-desc chat-desc-mb16">Yes, your code is <strong>correct</strong> for repeating the string exactly <strong>twice (2x)</strong>.</p>
                <div class="code-block">
                    <div class="code-block-header">
                        <span class="lang-label">&lt;/&gt; JavaScript</span>
                        <button class="copy-code-btn copy-btn-bare" title="Copy code">${copyIcon} Copy code</button>
                    </div>
                    <pre class="code-block-pre"><code>// 13. Repeat String
function repeatString(str) {
    // Repeat the string twice (2x)
    return str + str;
}
console.log(repeatString("Hello"));</code></pre>
                </div>
                <p class="chat-desc chat-desc-my"><strong>Output:</strong></p>
                <div class="inline-code-block code-bg">
                    <span class="chat-text">HelloHello</span>
                    <button class="action-btn copy-btn copy-btn-bare" title="Copy code" tabindex="0">${copyIcon}</button>
                </div>
                <p class="chat-desc chat-desc-mt16">is exactly what the <span class="inline-code">TODO</span> is asking for.</p>
            `
        },
        'sass': {
            user: "How do I import Sass files correctly?",
            ai: "<p class=\"chat-desc\">You should use the <code>@use</code> rule instead of <code>@import</code> in modern Sass.</p>"
        },
        'html': {
            user: "Can you check my sidebar HTML code?",
            ai: "<p class=\"chat-desc\">Your sidebar HTML looks structurally solid. Make sure you use semantic HTML5 tags like <code>&lt;aside&gt;</code> and <code>&lt;nav&gt;</code> where appropriate!</p>"
        },
        'dom': {
            user: "What's the best way to do Vanilla JS DOM manipulation?",
            ai: "<p class=\"chat-desc\">Use modern methods like <code>document.querySelector()</code>, and ensure you attach your scripts properly by listening to the <code>DOMContentLoaded</code> event.</p>"
        },
        'tips': {
            user: "Give me some Frontend assignment tips",
            ai: "<p class=\"chat-desc\">Focus heavily on pixel-perfect CSS accuracy, setting up reusable CSS variables, responsive design breakpoints, and clean Vanilla JavaScript modularity.</p>"
        }
    };

    const actionMenuHTML = `
        <div class="message-actions">
            <button class="action-btn copy-btn copy-btn-bare" title="Copy">${copyIcon}</button>
            <button class="action-btn like-btn copy-btn-bare" title="Good response">${likeIcon}</button>
            <button class="action-btn dislike-btn copy-btn-bare" title="Bad response">${dislikeIcon}</button>
            <button class="action-btn regenerate-btn copy-btn-bare" title="Regenerate">${regenIcon}</button>
            
            <div class="dropdown-wrapper">
                <button class="action-btn msg-more-btn copy-btn-bare" title="More">${moreIcon}</button>
                <div class="dropdown-menu msg-options hidden">
                    <div class="menu-label">Aug 17, 12:08 PM</div>
                    <button class="menu-item" tabindex="0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> View sources</button>
                    <button class="menu-item" tabindex="0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M3 12h10"></path><path d="M13 18l5-6-5-6"></path></svg> Branch in new chat</button>
                    <button class="menu-item" tabindex="0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> Read aloud</button>
                </div>
            </div>
        </div>
    `;

    // ==========================================
    // 7. ACTIVE CHAT ENGINE
    // ==========================================
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

    const uploadFileAction = document.querySelector('#uploadFileAction');
    const hiddenFileInput = document.querySelector('#hiddenFileInput');

    if (uploadFileAction) {
        uploadFileAction.addEventListener('click', () => {
            hiddenFileInput.click();
            document.querySelector('#attachmentDropdown').classList.add('hidden');
        });
    }

    if (hiddenFileInput) {
        hiddenFileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            
            files.forEach(file => {
                const fileBadge = document.createElement('div');
                fileBadge.className = 'file-badge';
                
                if (file.type.startsWith('image/')) {
                    const imgUrl = URL.createObjectURL(file);
                    fileBadge.innerHTML = `
                        <img src="${imgUrl}" alt="preview" class="icon-img preview-img" />
                        <span class="badge-text">${file.name}</span>
                        <span class="remove-file" aria-label="Remove file" tabindex="0" role="button">&times;</span>
                    `;
                } else {
                    fileBadge.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                        <span class="badge-text">${file.name}</span>
                        <span class="remove-file" aria-label="Remove file" tabindex="0" role="button">&times;</span>
                    `;
                }
                
                fileBadge.querySelector('.remove-file').addEventListener('click', () => fileBadge.remove());
                filePreviewContainer.appendChild(fileBadge);
            });
            
            hiddenFileInput.value = '';
        });
    }
});