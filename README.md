# Python / Electron / React Architecture

This project demonstrates how to setup an NX monorepo that hosts a python/flask web backend, a react web application frontend, and an electron shell that can serve the web application as a standalone desktop app.

For more information on this project, view the [associated blog post](https://matthewjberger.xyz/Integrating-Python-Flask-Electron-And-React/).

# Prerequisites 

Ensure that the following dependencies are installed on your system.

* Python 3
* NodeJS
* Yarn

## Quickstart

```bash
# Install the backend dependencies
pip3 install flask python-dotenv 

# Install the monorepo dependencies
yarn 

# Start the backend, frontend, and electron shell in parallel:
yarn start
```
