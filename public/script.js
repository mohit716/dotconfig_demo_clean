fetch("/config")
.then(res=>res.json())
.then(config=>{
    document.getElementById("greeting").textContent=
	`${config.greeting}, ${config.username}!`;
    document.getElementById("theme").textContent=`Theme is set to: ${config.theme}`;
    // apply initial theme from config	
	document.body.className=config.theme;
    // add toggle button functionality
	const btn =document.getElementById("toggleBtn");
	btn.addEventListener("click", ()=>{
		if(document.body.className==="light"){
			document.body.className="dark"
			document.getElementById("theme").textContent="This is set to: dark";

	}
	
		else{
			document.body.className="light";
			document.getElementById("theme").textContent="Theme is set to: light";
		}	
});
});
