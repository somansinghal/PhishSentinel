window.onload = function(){

    /* 3D globe */
    
    const globeContainer = document.getElementById("globe")
    
    if(globeContainer){
    
    const world = Globe()
    
    (globeContainer)
    
    .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
    
    const attacks=[
    
    {startLat:55,startLng:37,endLat:40,endLng:-74},
    {startLat:31,startLng:121,endLat:51,endLng:0},
    {startLat:19,startLng:72,endLat:34,endLng:-118}
    
    ]
    
    world.arcsData(attacks)
    .arcColor(()=>"red")
    .arcDashLength(.4)
    .arcDashAnimateTime(2000)
    
    }
    
    
    /* live threat feed */
    
    const feed=document.getElementById("attackFeed")
    
    if(feed){
    
    const threats=[
    
    "Phishing campaign targeting banking users",
    "Malware host detected from Russia",
    "Credential harvesting domain blocked",
    "Botnet scanning activity detected",
    "DDoS activity detected in EU network",
    "Suspicious login attempts detected",
    "Malicious IP blocked by firewall"
    
    ]
    
    function addThreat(){
    
    const threat=threats[Math.floor(Math.random()*threats.length)]
    
    const li=document.createElement("li")
    
    li.innerText=threat
    
    feed.prepend(li)
    
    }
    
    setInterval(addThreat,3000)
    
    }
    
    }