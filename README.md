# ChatGPT Frontend UI Clone

A high-fidelity, frontend-only recreation of the ChatGPT web application interface. This project was built to demonstrate advanced frontend UI architecture, responsive design, and state management using purely native web technologies. 

No frameworks, libraries, or external APIs were used in this project. All data and interactions are simulated on the client side.

## 🚀 Tech Stack

- **HTML5**: Semantic markup (`<aside>`, `<main>`, `<button>`) for accessibility and structure.
- **SCSS / CSS3**: Custom design system, CSS variables, Flexbox layout, and BEM-inspired class naming.
- **Vanilla JavaScript**: DOM manipulation, event delegation, and mock state management.

## ✨ Features Implemented

- **Responsive Layout**: Fluid transition from a desktop sidebar layout to a mobile drawer/overlay layout using modern CSS media queries.
- **Component Reordering**: Dynamic shifting of UI elements (e.g., prompt suggestions moving from below the composer on desktop to above the composer on mobile) using CSS Flexbox `order`.
- **Dynamic Message Composer**: An auto-growing `<textarea>` that adjusts its height based on user input, paired with a fully functional UI for file attachment previews.
- **Mock AI Chat Engine**: Simulated conversation flow with typing indicators, artificial delays, and predefined static responses (including code block rendering).
- **Interactive UI Elements**: Fully functional frontend dropdowns (Model Selector, User Profile, Message Options, Attachments), Modals (Search), and active button states (Like/Dislike, Copy code).
- **SVG Iconography**: High-quality, inline SVGs used for all icons ensuring crisp scaling and easy styling without external font dependencies.
- **Accessibility (A11y)**: Clean focus states (`:focus-visible`), semantic tags, and keyboard-friendly navigation (e.g., `Enter` key support on chat items).

## 📁 Project Structure

The project follows a modular file structure to keep logic and styling highly maintainable.

```text
/
├── css/
│   ├── abstracts/
│   │   ├── _variables.scss      # Design tokens (colors, fonts, shadows)
│   │   ├── _functions.scss      # Utility functions (e.g., px to rem)
│   │   └── _mixins.scss         # Reusable CSS chunks (flex-center, etc.)
│   ├── base/
│   │   └── _base.scss           # Resets and global element styles
│   ├── layout/
│   │   ├── _sidebar.scss        # Sidebar navigation and history groups
│   │   └── _content.scss        # Main chat wrapper and header layout
│   ├── components/
│   │   ├── _components.scss     # Chat bubbles, composer, and dropdowns
│   │   └── _media-queries.scss  # Breakpoints and responsive overrides
│   └── main.scss                # Main entry file importing all partials
├── js/
│   ├── data.js                  # Mock chat histories and SVG icon strings
│   └── app.js                   # Core DOM logic and event listeners
├── assets/
│   └── icons/                   # Raw SVG files
└── index.html                   # Main semantic HTML structure