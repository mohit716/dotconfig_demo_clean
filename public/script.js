fetch("/config")
.then(res=>res.json())
.then(config=>{
    document.getElementById("greeting").textContent=
	`${config.greeting}, ${config.username}!`;
    document.getElementById("theme").textContent=`Theme is set to: ${config.theme}`;
	document.body.className=config.theme;
});
