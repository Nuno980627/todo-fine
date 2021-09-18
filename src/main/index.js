import { app, BrowserWindow, ipcMain, Menu, Tray } from 'electron'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

// const express = require('/app.js');

const express = require('express')
const apicache = require('apicache')
const path = require('path')
const fs = require('fs')
const cache = apicache.middleware

// 托盘对象
var appTray = null

import routes from './routers'

function createWindow() {
  const app = express()

  // 跨域设置
  app.all('*', function(req, res, next) {
    if (req.path !== '/' && !req.path.includes('.')) {
      res.header('Access-Control-Allow-Credentials', true)
      // 这里获取 origin 请求头 而不是用 *
      res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
      res.header('Access-Control-Allow-Headers', 'X-Requested-With')
      res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
      res.header('Content-Type', 'application/json;charset=utf-8')
    }
    next()
  })
  const onlyStatus200 = (req, res) => res.statusCode === 200

  app.use(cache('2 minutes', onlyStatus200))

  app.use(express.static(path.resolve(__dirname, 'public')))

  app.use(function(req, res, next) {
    const proxy = req.query.proxy
    if (proxy) {
      req.headers.cookie = req.headers.cookie + `__proxy__${proxy}`
    }
    next()
  })

  app.use('/', routes)
  const port = 3000
  app.listen(port, () => {
    console.log(`server running @ http://localhost:${port}`)
  })
  // express();
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 1000,
    frame: false,
    resizable: false,
    skipTaskbar: false,
    transparent: false,
    title: 'TodoFine',
    autoHideMenuBar: true,
    x: 0,
    y: 0
  })

  mainWindow.loadURL(winURL)
  mainWindow.center()
  // 系统托盘右键菜单
  var trayMenuTemplate = [
    {
      label: 'show',
      click: function() {
        // ipc.send('close-main-window');
        mainWindow.show()
      }
    },

    {
      label: 'quie',
      click: function() {
        // ipc.send('close-main-window');
        mainWindow.close()
      }
    }
  ]
  // 系统托盘图标目录
  appTray = new Tray(path.resolve('./build/icons/', 'icon.ico'))

  // 图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)

  // 设置此托盘图标的悬停提示内容
  appTray.setToolTip('TODO-FINE')

  // 设置此图标的上下文菜单
  appTray.setContextMenu(contextMenu)
  appTray.on('click', function(Event) {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('close', (e) => {
  if (mainWindow.isVisible()) {
    mainWindow.hide()
  }
  // mainWindow.close()
})
ipcMain.on('minimize', (e) => {
  mainWindow.minimize()
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
