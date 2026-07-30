<div align="center">
# 🛠️ UtilityHub v1.1
**The Premium Productivity Suite. Built for Professionals.**
Version

License: MIT

UtilityHub is a blazing-fast, privacy-first, offline-capable suite of ten powerful productivity tools unified into a single, beautiful workspace. No servers, no tracking, no dependencies—just pure performance.
</div>
## 📖 Overview
UtilityHub v1.1 is an ambitious engineering experiment and a highly practical application. It delivers a premium SaaS-tier user experience entirely within a **single, self-contained index.html file**.
Built entirely with HTML5, CSS3, and Vanilla JavaScript, UtilityHub abandons bloated frameworks and complex build steps. It is designed for professionals, developers, and students who need instant access to daily utilities without relying on internet connectivity or sacrificing their privacy. Your data never leaves your device.
## ✨ Features
UtilityHub comes packed with a robust set of global features and individual micro-applications:
### Global Architecture
 * **Single-File Ecosystem:** Zero dependencies, zero external libraries.
 * **Command Palette (Ctrl + K):** Instantly search, navigate, and execute commands without leaving your keyboard.
 * **Dynamic Theming:** Beautifully crafted Dark, Light, and Auto (System) modes with seamless transitions.
 * **Privacy-First Data Management:** Everything is stored securely in your browser's LocalStorage.
 * **JSON Import/Export:** Easily backup, transfer, and restore your entire workspace.
 * **Intelligent Search:** Instant debounced filtering across all utilities.
 * **PWA & Offline Ready:** Works flawlessly without an internet connection.
### The Utilities
 1. **Password Generator:** Create highly secure, cryptographic passwords locally.
 2. **QR Generator:** Instantly convert URLs or text into downloadable QR codes.
 3. **BMI Calculator:** Track Body Mass Index with historical data and health indicators.
 4. **Age Calculator:** Calculate precise age and time remaining until your next birthday.
 5. **Unit Converter:** Convert across Length, Weight, Temperature, Data, and Volume.
 6. **Calculator:** Advanced mathematical tool with standard and scientific modes.
 7. **Pomodoro Timer:** Enhance focus with customizable intervals and sound notifications.
 8. **Smart Notes:** Distraction-free, auto-saving notepad for quick thoughts.
 9. **To-Do List:** Task tracking with visual progress meters and categorizations.
 10. **Expense Tracker:** Monitor your budget and visualize financial habits with pure CSS doughnut charts.
## 📸 Screenshots
### Home Experience

*The landing page highlighting core features and application statistics.*
### Interactive Dashboard

*The main workspace featuring drag-and-drop layout and quick-access favorites.*
### Command Palette in Action

*Global navigation powered by the Ctrl + K command palette.*
### Expense Tracker & Charts

*Visualizing local data without external charting libraries.*
## 🚀 Live Demo
Experience UtilityHub instantly in your browser:
 * **Live Website:** https://utilityhub.demo.app *(Placeholder)*
 * **GitHub Repository:** https://github.com/sreenand-cod/utilityhub *(Placeholder)*
 * **Documentation:** Wiki / Docs *(Placeholder)*
## 💻 Installation
Because UtilityHub is a monolithic single-file application, installation is remarkably simple. No npm install, no webpack, no build configurations.
 1. **Download** the latest release or clone the repository:
   ```bash
   git clone https://github.com/sreenand-cod/utilityhub.git
   
   ```
 2. **Open** the index.html file in any modern web browser.
 3. **Enjoy!**
> **Developer Note:** The single-file architecture makes it perfect for on-the-go development. You can easily open, edit, and test the project directly on mobile devices using mobile text editors like TrebEdit or Spck Editor.
> 
## 📂 Folder Structure
```text
UtilityHub/
├── index.html        # The entire application (HTML, CSS, JS)
├── README.md         # Project documentation
└── assets/           # (Optional) Directory for offline screenshots/icons
    └── screenshots/

```
*Note: v1.1 is intentionally designed to keep all core logic, styling, and markup within index.html to guarantee maximum portability.*
## 🧰 Utilities
| Utility | Description | Status |
|---|---|---|
| **Password Generator** | Configurable, cryptographically secure string generator. | 🟢 Active |
| **QR Generator** | Real-time Canvas-based QR code generation. | 🟢 Active |
| **BMI Calculator** | Body Mass Index tracking with historical data logging. | 🟢 Active |
| **Age Calculator** | Exact age computation down to days and months. | 🟢 Active |
| **Unit Converter** | Real-time conversion across dozens of metrics. | 🟢 Active |
| **Calculator** | Standard and Scientific mathematical operations with history. | 🟢 Active |
| **Pomodoro Timer** | Focus, short break, and long break tracker with audio alerts. | 🟢 Active |
| **Smart Notes** | Auto-saving, searchable local text editor. | 🟢 Active |
| **To-Do List** | Task management with progress tracking and categories. | 🟢 Active |
| **Expense Tracker** | Financial logging with CSS-rendered visual charts. | 🟢 Active |
## ⌨️ Keyboard Shortcuts
UtilityHub is built for power users. Navigate the interface without touching your mouse.
| Shortcut | Action | Context |
|---|---|---|
| Ctrl + K / Cmd + K | Open Command Palette | Global |
| Ctrl + / | Focus Search Bar | Dashboard |
| Ctrl + Shift + D | Toggle Dark/Light Theme | Global |
| ESC | Close active dialog/modal | Modals, Palette |
| Enter | Execute selected action | Palette, Forms |
| ↑ / ↓ Arrows | Navigate lists | Palette, Utilities |
## ⚡ Performance
UtilityHub is engineered to feel like a native application:
 * **Zero Dependencies:** No React, Vue, Tailwind, or jQuery overhead.
 * **Lazy Rendering:** Native HTML5 <template> and <dialog> elements ensure minimal initial DOM size.
 * **Efficient DOM Updates:** Event delegation is used extensively; thousands of list items only require a single event listener on their parent container.
 * **Minimal Reflows:** DOM read/write operations are batched, and animations rely exclusively on hardware-accelerated transform and opacity properties.
 * **Debounced Inputs:** Search algorithms and rapid user inputs are throttled to maintain a buttery smooth 60fps experience.
## ♿ Accessibility
The web is for everyone. UtilityHub adheres strictly to modern accessibility standards:
 * **Semantic HTML:** Proper use of <nav>, <main>, <section>, and native <dialog> elements.
 * **ARIA Attributes:** Dynamic regions announce changes to screen readers (e.g., aria-live="polite").
 * **Focus Management:** Modals seamlessly trap keyboard focus and return it to the triggering element upon closing.
 * **Reduced Motion:** Full support for prefers-reduced-motion media queries, automatically disabling heavy animations for sensitive users.
 * **High Contrast:** Color palettes are tested for WCAG AA compliance.
## 🌐 Browser Support
Works seamlessly across all modern desktop and mobile browsers.
| Browser | Supported | Minimum Version |
|---|---|---|
| Google Chrome | ✅ | v85+ |
| Microsoft Edge | ✅ | v85+ |
| Mozilla Firefox | ✅ | v80+ |
| Apple Safari | ✅ | v14+ |
| Opera | ✅ | v71+ |
| iOS Safari / Chrome | ✅ | iOS 14+ |
| Android Chrome | ✅ | Android 9+ |
## 🗺️ Roadmap
 * [x] **UtilityHub v1.0:** Initial proof of concept, basic calculators and timers.
 * [x] **UtilityHub v1.1:** Complete UI overhaul, Command Palette, Drag & Drop dashboard, Data Export/Import, Single-file architecture enforcement.
 * [ ] **UtilityHub v1.2:** Full Offline PWA Manifest, custom wallpaper backgrounds, advanced markdown support in Notes.
 * [ ] **UtilityHub v2.0:** End-to-end encrypted cloud sync (optional), modular plugin system, desktop wrapper (Electron/Tauri).
## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
 1. Fork the Project
 2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
 3. Commit your Changes (git commit -m 'Add some AmazingFeature')
 4. Push to the Branch (git push origin feature/AmazingFeature)
 5. Open a Pull Request
*Please ensure your code follows the existing vanilla JavaScript patterns and does not introduce external dependencies.*
## 📄 License
Distributed under the MIT License. See LICENSE for more information.
## ✍️ Author
Created with precision by:
**Sreenand S Kumar (@sreenand-cod)**
 * **GitHub:** github.com/sreenand-cod *(Placeholder)*
 * **Instagram:** s.sreenand.d *(Placeholder)*
## 🙏 Acknowledgements
The design language, architecture, and user experience of UtilityHub were heavily inspired by the exceptional work of the following teams:
 * **Linear:** For their mastery of keyboard-first design and command palettes.
 * **Apple:** For glassmorphism guidelines and fluid interface animations.
 * **Material 3:** For intuitive ripple effects and accessible color theory.
 * **Microsoft Fluent:** For soft shadows and layout hierarchy.
 * **Arc Browser:** For rethinking sidebar navigation and modal interactions.
 * **Notion:** For the clean, distraction-free typography in the Notes utility.
