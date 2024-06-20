const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}

const menuTemplate = [
    {
        label: 'Menu Item 1',
        click: () => { console.log('Clicked Menu Item 1'); }
    },
    {
        label: 'Menu Item 2',
        click: () => { console.log('Clicked Menu Item 2'); }
    }
];

const contextMenu = Menu.buildFromTemplate(menuTemplate);

ipcMain.on('show-context-menu', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    contextMenu.popup({
        window: win
    });
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
