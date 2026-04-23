const { app, BrowserWindow, shell } = require('electron');

let win;
const BASE_URL = 'https://stormwindsky.github.io/scratch-gui/';
const HOME_PAGE = 'https://stormwindsky.github.io/scratch-gui/mainpage.html';

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadURL(HOME_PAGE);

    // Intercepter la navigation
    win.webContents.on('will-navigate', (event, url) => {
        // Vérifier si l'URL de destination commence par ton domaine de base
        if (!url.startsWith(BASE_URL)) {
            // 1. Empêcher Electron de charger la page
            event.preventDefault();

            // 2. Ouvrir le lien dans le navigateur par défaut du système
            shell.openExternal(url);

            // 3. Forcer le retour à la page d'accueil (ou rester sur la page actuelle)
            // Note : Comme on a fait preventDefault(), la fenêtre ne bougera pas,
            // mais on s'assure ici qu'elle charge bien la base si besoin.
            if (win.getURL() === "about:blank") {
                win.loadURL(HOME_PAGE);
            }
        }
    });

    // Optionnel : Gérer aussi les liens qui s'ouvrent dans de nouvelles fenêtres (target="_blank")
    win.webContents.setWindowOpenHandler(({ url }) => {
        if (!url.startsWith(BASE_URL)) {
            shell.openExternal(url);
            return { action: 'deny' };
        }
        return { action: 'allow' };
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
