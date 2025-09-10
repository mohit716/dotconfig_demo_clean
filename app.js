const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Serve static frontend files
app.use(express.static("public"));

// API to fetch config
app.get("/config",(req,res)=>{
    const config = JSON.parse(fs.readFileSync(".myapp/settings.json", "utf-8"));
    res.json(config);
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});
