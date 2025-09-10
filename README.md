# DotConfig Demo

A tiny full-stack demo showing how apps can read settings from a hidden folder (like IntelliJ’s `.idea/`) and drive the UI at runtime.

## What it shows
- Hidden config in `.myapp/settings.json`
- Backend (Node.js + Express) serves `/config`
- Frontend (HTML/JS) fetches config and updates the page
- **NEW:** Theme toggle button switches between `dark` and `light`
- CSS applies `body.dark` / `body.light` based on current theme

## Project Structure
dotconfig_demo/
  .myapp/
    settings.json
  public/
    index.html
    script.js
  app.js
  package.json

## Run Locally
1) Install deps  
   `npm install`
2) Start server  
   `node app.js`
3) Open in browser  
   `http://localhost:3000`

## Config Example (.myapp/settings.json)
{
  "username": "mohit",
  "theme": "dark",
  "greeting": "Welcome back"
}

- On load, the page applies the theme from config.
- You can also click **Toggle Theme** in the UI to switch at runtime (no persistence).

## API
GET `/config` → returns the JSON from `.myapp/settings.json`.

## Notes
- Do not expose `.myapp/` directly; it’s read by the backend only.
- If the page stays on “Loading…”, check DevTools Console and ensure `/config` responds.
