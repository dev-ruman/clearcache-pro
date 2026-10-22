# 🗑️ ClearCache Pro

**Chrome / Edge Extension Suite (Manifest V3)**

ClearCache Pro is a one-click browser cleaner that clears cache, cookies, local storage, history, and form data, with domain whitelist support. This repository includes the extension and an interactive live simulator so you can test it before installing.

![Manifest V3](https://img.shields.io/badge/Manifest-V3-6366f1)
![Version](https://img.shields.io/badge/version-2.4.0-4f46e5)
![Browsers](https://img.shields.io/badge/Chrome%20%7C%20Edge%20%7C%20Brave-supported-312e81)

<p align="center">
  <a href="https://dev-ruman.github.io/clearcache-pro/">
    <img src="https://img.shields.io/badge/▶%20Launch-Live%20Simulator-6366f1?style=for-the-badge" alt="Launch Live Simulator">
  </a>
</p>

---

## 🚀 Live Demo

**👉 [Try the Live Simulator](https://dev-ruman.github.io/clearcache-pro/)**

No installation needed. The simulator runs entirely in your browser and shows how the extension behaves before you add it to Chrome.

### What you can do in the simulator

- Click the extension icon in a simulated Chrome window to open the popup.
- Toggle cleanup options and run a simulated **Quick Clear**.
- Add and remove domains in the **Protected Whitelist** and see protected domains preserved.
- Enable or disable **Auto-Clear on Startup**.
- Watch real-time mock metrics: cached data, active cookies, local storage, history entries, form autofill, and domain status.
- Follow the **Extension Event Log** to see what each action would trigger.
- Refresh the simulated page to repopulate cache and storage values.
- Switch between the popup's light and dark themes, or toggle the global dark mode.
- Explore three tabs: **Live Simulator**, **Extension Files**, and **Installation Guide**.
- Download the full extension bundle from the **Extension Files** tab.

### Run it locally

```bash
git clone https://github.com/dev-ruman/clearcache-pro.git
cd clearcache-pro
```

Then open `index.html` in any modern browser. No build step is required.

### Host it yourself with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, your simulator will be live at:

```
https://dev-ruman.github.io/clearcache-pro/
```

---

## ✨ Features

- **Quick Clear Now**: a one-click button to remove selected browsing data.
- **Time Range Selector**: Last Hour, Last 24 Hours, Last 7 Days, Last 4 Weeks, or All Time.
- **Selectable Data Types**:
  - Cached Images & Files
  - Cookies & Site Data
  - Local Storage
  - Browsing History
  - Download History
  - Form Autofill Data
  - Saved Passwords
- **Select All** shortcut for quickly toggling every option.
- **Auto-Clear on Startup**: clears data when the browser restarts.
- **Protected Whitelist**: add domains (e.g. `github.com`) whose data is preserved during cleanup.
- **Dark / Light Theme** toggle in the popup.
- **Manifest V3 Compliant** and works with Chrome, Edge, and Brave.

---

## 📦 Installation Guide

Follow these steps to load the extension into Google Chrome, Brave, or Edge in Developer Mode.

### Step 1: Get the Extension Files

Clone or download this repository. The extension files are in the [`ClearCache Pro`](https://github.com/dev-ruman/clearcache-pro/tree/main/ClearCache%20Pro) folder.

You can also open the **Extension Files** tab in the simulator and click **Download Extension Bundle** to save the files into a local folder (for example `/ClearCacheExtension`).

### Step 2: Enable Developer Mode

Open your browser and go to:

```
chrome://extensions
```

Toggle on **Developer mode** in the top-right corner.

### Step 3: Load Unpacked

Click **Load unpacked** and select the `ClearCache Pro` folder (the one containing `manifest.json`). The extension will appear in your toolbar immediately.

---

## 🔐 Required Permissions

| Permission | Purpose |
|---|---|
| `browsingData` | Allows calling `chrome.browsingData.remove()` to clear cache, cookies, and history. |
| `storage` | Saves user preferences and the domain whitelist. |
| `alarms` | Handles periodic automated cache cleanup schedules. |

---

## 🗂️ Project Structure

```
clearcache-pro/
├── ClearCache Pro/
│   ├── icons/
│   ├── background.js
│   ├── manifest.json
│   ├── popup.html
│   └── popup.js
├── index.html
├── LICENSE
└── README.md
```

| File | Description |
|---|---|
| `index.html` | Interactive live simulator, source viewer, and install guide |
| `ClearCache Pro/manifest.json` | Extension configuration, permissions, and entry points |
| `ClearCache Pro/popup.html` | The popup user interface |
| `ClearCache Pro/popup.js` | Popup logic and Chrome API interaction |
| `ClearCache Pro/background.js` | Background service worker that performs the data cleanup |
| `ClearCache Pro/icons/` | Extension icons (16, 48, and 128 px) |

> **Note:** The manifest references the `icons/` folder (`icon16.png`, `icon48.png`, `icon128.png`). Make sure these exist before loading the extension.

---

## 🛠️ Built With

- Manifest V3
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/) (simulator)
- [Inter](https://fonts.google.com/specimen/Inter) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) fonts (simulator)

---

## 👤 Author

**[dev-ruman](https://github.com/dev-ruman)**

Project repository: [dev-ruman/clearcache-pro](https://github.com/dev-ruman/clearcache-pro)

If you find this project useful, consider giving it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
