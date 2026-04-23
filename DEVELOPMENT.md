# Development and Testing Guide

This guide explains how to run and test **StormWarp Online Desktop** on Linux (or other platforms) directly from the source code without compiling it into a binary.

## Prerequisites

Before starting, ensure you have the following installed on your Linux distribution:
- **Node.js** (LTS version recommended)
- **NPM** (Node Package Manager)

## How to Test Without Compiling

### 1. Clone the Repository

Open your terminal and clone the project:
```bash
git clone https://github.com/your-username/stormwarp-online-desktop.git
cd stormwarp-online-desktop
```

### 2. Install Dependencies

Install the required Electron environment locally. This will read the `package.json` file:
```bash
npm install
```

### 3. Run the Application

To launch the application in development mode (using the installed Electron binary to interpret your `main.js`):
```bash
npm start
```

## What to Check During Testing

- **Base Navigation:** The app should load the Scratch-GUI main page automatically.
- **Sandbox Security:** Click on any external link. The app should stay on the project page, and the link should open in your default system browser (e.g., Firefox or Chrome).
- **Console Logs:** Check the terminal for any critical errors (standard GLib-GObject warnings on Linux can be ignored).

## Troubleshooting

If Electron fails to start on Linux, you might need to fix permissions for the Chrome Sandbox:
```bash
sudo chown root:root node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
```
