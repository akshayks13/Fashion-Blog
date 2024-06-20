const { app, BrowserWindow } = require('electron');
 
 
function createWindow() {
  let win = new BrowserWindow({
    // icon:path.join(__dirname,"logo.ico"),
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
 
  win.loadFile('./Home.html');
}
 
app.whenReady().then(createWindow);
