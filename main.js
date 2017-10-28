const electron = require('electron')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

let mainWindow

const start = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, minWidth: 500, minHeight: 300})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null })
}

app.on('ready', start)

app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } })

app.on('activate', () => { if (mainWindow === null) { start() } })
