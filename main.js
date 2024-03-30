const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        minWidth: 600,
        height: 600,
    })

    win.setTitle("HCTCSSF");
    win.setMenu(null);
    win.setIcon("ui/icons/3d/icon_resized.png");

    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})