// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const { session } = require('electron') // 쿠키 저장을 위해


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 1280,
    show: false,
    title: '무인 등기 교부기',
    titleBarStyle: 'hiddenInset',
    autoHideMenuBar: true, //menubar 숨기기
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    resizable : true,
  }
);

// serial port
mainWindow.webContents.session.on('select-serial-port', (event, portList, webContents, callback) => {
  // Add listeners to handle ports being added or removed before the callback for `select-serial-port`
  // is called.
  mainWindow.webContents.session.on('serial-port-added', (event, port) => {
    console.log('serial-port-added FIRED WITH', port)
    // Optionally update portList to add the new port
  })

  mainWindow.webContents.session.on('serial-port-removed', (event, port) => {
    console.log('serial-port-removed FIRED WITH', port)
    // Optionally update portList to remove the port
  })

  event.preventDefault()
  if (portList && portList.length > 0) {
    callback(portList[0].portId)
  } else {
    // eslint-disable-next-line n/no-callback-literal
    callback('') // Could not find any matching devices
  }
})

mainWindow.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
  if (permission === 'serial' && details.securityOrigin === 'file:///') {
    return true
  }

  return false
})

mainWindow.webContents.session.setDevicePermissionHandler((details) => {
  if (details.deviceType === 'serial' && details.origin === 'file://') {
    return true
  }

  return false
})
// end of serial port

  /* 세로모드 : 800x1280 */
  /* 메뉴삭제 */
  mainWindow.setMenu(null)

  
  // mainWindow.setMenu(null);
  // and load the index.html of the app.
  ///mainWindow.loadFile('./src/app.vue');
  mainWindow.loadURL('https://localhost:9020');


  /*
  var splash = new BrowserWindow({ 
    width: 700, 
    height: 500, 
    transparent: true, 
    frame: false, 
    alwaysOnTop: true 
  });
  
  splash.loadFile('splash.html');
  splash.center();

  setTimeout(function () {
    splash.close();
    mainWindow.center();
    mainWindow.show();
  }, 5000);

  */

    mainWindow.center();
    mainWindow.show();

  // Open the DevTools.
 //mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
/*
  const { net } = require('electron')
  const request = net.request('http://localhost:8080/log')
  request.on('response', (response) => {
    console.log(`STATUS: ${response.statusCode}`)
    console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    response.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`)
    })
    response.on('end', () => {
      console.log('No more data in response.')
    })
  })
  request.end()
*/

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

})


ipcMain.on('close', function () {
  app.quit();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
app.commandLine.appendSwitch('ignore-certificate-errors')

// SSL/TSL: this is the self signed certificate support
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  // On certificate error we disable default behaviour (stop loading the page)
  // and we then say "it is all fine - true" to the callback
  event.preventDefault();
  callback(true);
});

if (process.env.NODE_ENV === 'DEV') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}