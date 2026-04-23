# StormWarp Desktop (Online Version)

###### THIS IS NOT A FORK OF TURBOWARP'S DESKTOP OFFLINE, BUT IT WAS CREATED ENTIRELY BY ME, BY USING ELECTRON LIKE IN THE OFFLINE VERSION

# StormWarp Online Desktop

A dedicated Electron-based desktop wrapper for the StormWarp project.

## Project Environment

This application is built using the **Electron** framework, which combines the Chromium rendering engine and the Node.js runtime. 

### Core Tech Stack:
- **Framework:** Electron ^41.3.0
- **Runtime:** Node.js
- **Frontend Target:** Hosted Scratch-GUI instance (GitHub Pages)

### Environment Details:
The application operates as a "Webview Wrapper". It is configured with `contextIsolation: true` and `nodeIntegration: false` to ensure security while browsing. It includes a custom navigation handler that intercepts external URLs to protect the user's workflow by opening non-project links in the system's default browser.

## Legal & Licensing

### License
This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**. 

As per the GPL-3.0 requirements:
- **Permissions:** Commercial use, modification, distribution, and private use are permitted.
- **Conditions:** Any modifications or derivative works must also be licensed under the GPL-3.0 and the source code must be made available.
- **Disclaimers:** This software is provided "as is" without any warranty of any kind.

### Third-Party Dependencies
This project utilizes several open-source packages (listed in `package-lock.json`), including but not limited to:
- `electron` (MIT License)
- Various Node.js utility modules (MIT/BSD/Apache-2.0 Licenses)

No proprietary code is included in this repository. All dependencies are managed via NPM and are subject to their respective open-source licenses.




## ============================
## ============================



### For development:
###### here: 
https://github.com/Stormwindsky/StormWarp-Desktop-Online-Version/blob/main/DEVELOPMENT.md
