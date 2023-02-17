const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    resizable: false,
    useContentSize: true,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        webSecurity: false,
      nodeIntegration: true,
      },
  })

  win.loadFile('main.html')
}
ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

ipcMain.on('close-app', () => {
  if (mainWindow) {
    mainWindow.close()
  }
})
ipcMain.on('min-app', () => {
  mainWindow.minimize()
})


app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
    
  })
})

