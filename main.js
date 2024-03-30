const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    win.setTitle("HCTCSSF");
    win.setMenu(null);
    win.setIcon("ui/icons/palette.png");

    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})