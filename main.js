const { app, BrowserView, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 });

  const view = new BrowserView();
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 800, height: 800 });
  view.setAutoResize({
    horizontal: true,
    vertical: true,
    width: true,
    height: true,
  });
  view.webContents.loadURL("http://127.0.0.1:3000");

  win.maximize();
  win.show();
});
