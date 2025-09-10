# DotConfig Demo

A simple Node.js project that demonstrates how software can use hidden configuration folders (like `.idea/` in IntelliJ or `.git/` in Git) to control behavior.

## Features
- Reads settings from `.myapp/settings.json`
- Serves a frontend with Express
- Exposes a `/config` API route
- Applies greeting and theme from configuration

## Run Locally
```bash
npm install
node app.js
L:
