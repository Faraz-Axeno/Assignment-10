# ChatGPT Web Application UI Recreation

A high-fidelity, frontend-only recreation of the ChatGPT web application interface. This project was built from the ground up to showcase advanced frontend UI architecture, responsive design, and modular state management using purely native web technologies. No frameworks, libraries, or external APIs were used; all application data, modals, popups, and interactions are simulated entirely on the client side.

---

## 🚀 Tech Stack

* **HTML5**: Semantic markup (`<aside>`, `<main>`, `<section>`, `<header>`, `<nav>`, `<button>`) structured for accessibility, screen readers, and clean heading hierarchies.
* **SCSS / CSS3**: Custom design tokens, CSS custom properties, responsive Flexbox and CSS Grid layouts, and BEM-inspired class naming.
* **Vanilla JavaScript**: Modular ES6 architecture handling DOM manipulation, event delegation, search filtering, auto-growing textareas, dropdown popups, and simulated AI streaming responses.

---

## ✨ Features Implemented

* **Fluid Responsive Layout**: Seamless transition from a persistent desktop sidebar layout to an off-canvas mobile drawer/overlay layout across multiple device breakpoints.
* **Dynamic Component Reordering**: CSS Flexbox order adjustments ensuring prompt suggestions reposition fluidly from below the composer on desktop to above it on mobile screens.
* **Interactive Message Composer**: A multi-line auto-growing `<textarea>` that adjusts its height based on user input, paired with a fully functional file attachment preview system (file names, sizes, error states, and remove triggers).
* **Simulated AI Chat Engine**: Asynchronous conversation flow with typing indicators, artificial delays, static responses, and rich-text code block presentations.
* **Interactive Modals & Popups**: Fully functional modal dialogs (including Search and Settings) and floating popups triggered seamlessly via interface actions.
* **Three-Dot Action Menus**: Contextual popups triggered by clicking the three-dot options menu on individual chat history items or message cards, supporting actions like renaming, deleting, or managing conversation preferences.
* **Fully Wired UI Controls**: Frontend dropdowns (Model Selector, User Profile menus, message actions), real-time conversation search filtering, and persistent active states (likes, dislikes, copying).
* **SVG Iconography**: Crisp, inline SVG icons used throughout the app for all interface actions without external font dependencies.
* **Accessibility (A11y)**: Focus-visible states, keyboard-friendly navigation, proper ARIA labeling, and high-contrast compliance.

---

## 📁 Complete Folder Structure

```ChatGPT Clone
/
├── index.html
├── README.md
├── assets/
├── css/
│   ├── main.css
│   └── main.css.map
├── js/
│   ├── app.js
│   ├── data/
│   │   └── mockData.js
│   ├── features/
│   │   └── chatEngine.js
│   └── ui/
│       ├── attachment.js
│       ├── dropdowns.js
│       ├── modal.js
│       └── sidebar.js
└── scss/
    ├── main.scss
    ├── abstracts/
    │   ├── _functions.scss
    │   ├── _mixins.scss
    │   └── _variables.scss
    ├── base/
    │   └── _base.scss
    ├── components/
    │   ├── _buttons.scss
    │   ├── _chat.scss
    │   ├── _composer.scss
    │   ├── _dropdowns.scss
    │   ├── _media-queries.scss
    │   └── _modals.scss
    └── layout/
        ├── _content.scss
        └── _sidebar.scss