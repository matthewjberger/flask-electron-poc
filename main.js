const { app, BrowserWindow } = require("electron");
const axios = require("axios");

async function makePostRequest(test) {
  axios
    .get("http://127.0.0.1:5000/test")
    .then(function (response) {
      console.log("It says: ", response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");

  makePostRequest();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
});
