export const voiceIconHTML = `<img src="assets/icons/voice.svg" alt="voice icon" class="icon-img voice-img" />`;
export const sendIconHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;
export const stopIconHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="icon-svg"><rect x="6" y="6" width="12" height="12"></rect></svg>`;
export const copyIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
export const likeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>`;
export const dislikeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2"></path></svg>`;
export const regenIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-svg"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>`;
export const moreIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-svg"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

export const mockChats = {
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

export const actionMenuHTML = `
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