async function scanURL(){

    const url = document.getElementById("urlInput").value
    const result = document.getElementById("result")
    const meter = document.getElementById("meter")
    
    const apiKey = "your_api_key"
    
    result.innerHTML="Scanning..."
    
    let risk = 10
    
    if(url.length > 60) risk+=20
    if(url.includes("login")) risk+=20
    if(url.includes("verify")) risk+=20
    if(url.includes("secure")) risk+=10
    
    try{
    
    const response = await fetch(
    `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`,
    {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
    client:{clientId:"phishsentinel",clientVersion:"1.0"},
    threatInfo:{
    threatTypes:["MALWARE","SOCIAL_ENGINEERING"],
    platformTypes:["ANY_PLATFORM"],
    threatEntryTypes:["URL"],
    threatEntries:[{url:url}]
    }
    })
    })
    
    const data = await response.json()
    
    if(data.matches) risk+=40
    
    }catch{}
    
    let status="SAFE"
    
    if(risk>70) status="HIGH RISK"
    else if(risk>40) status="SUSPICIOUS"
    
    result.innerHTML = `
    <h3>${status}</h3>
    <p>Risk Score: ${risk}%</p>
    `
    
    meter.innerHTML = `
    <div style="background:#1e293b;border-radius:8px">
    <div style="width:${risk}%;background:#ef4444;padding:6px;border-radius:8px"></div>
    </div>
    `
    
    saveScan(url)
    
    displayHistory()
    
    }
    
    function saveScan(url){
    
    let scans = JSON.parse(localStorage.getItem("scans")) || []
    
    scans.unshift(url)
    
    localStorage.setItem("scans",JSON.stringify(scans.slice(0,6)))
    
    }
    
    function displayHistory(){
    
    let scans = JSON.parse(localStorage.getItem("scans")) || []
    
    const history = document.getElementById("history")
    
    if(!history) return
    
    history.innerHTML = scans.map(s=>`<li>${s}</li>`).join("")
    
    }
    
    displayHistory()

    function scanURL(){

        const url=document.getElementById("urlInput").value
        
        const result=document.getElementById("result")
        
        let risk=10
        
        if(url.includes("login")) risk+=20
        if(url.includes("verify")) risk+=20
        if(url.length>60) risk+=20
        
        let status="SAFE"
        
        if(risk>70) status="HIGH RISK"
        else if(risk>40) status="SUSPICIOUS"
        
        result.innerHTML=`
        
        <h3>${status}</h3>
        
        <p>Risk Score: ${risk}%</p>
        
        `
        
        explainThreat(url)
        
        }
        
        function explainThreat(url){
        
        let reasons=[]
        
        if(url.includes("login"))
        reasons.push("Login keyword often used in phishing attacks")
        
        if(url.includes("verify"))
        reasons.push("Verification bait detected")
        
        if(url.length>60)
        reasons.push("URL unusually long")
        
        document.getElementById("aiExplain").innerHTML=
        reasons.map(r=>`<p>⚠ ${r}</p>`).join("")
        
        }

const terminal=document.getElementById("terminal")

const input=document.getElementById("cmd")

if(input){

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=this.value

terminal.innerHTML+=`<p>> ${cmd}</p>`

if(cmd==="help")
terminal.innerHTML+=`<p>commands: scan example.com</p>`

if(cmd.includes("scan"))
terminal.innerHTML+=`<p>Scanning target...</p>`

this.value=""

}

})

}

function toggleSidebar(){
    document.querySelector(".sidebar").classList.toggle("collapsed")
}
    