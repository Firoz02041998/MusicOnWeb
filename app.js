window.addEventListener('load',()=>{
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const balls = document.querySelectorAll('.balls')
    const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"]

    pads.forEach((pad,index)=>{
        pad.addEventListener("click",function(){
            sounds[index].currentTime=0
            sounds[index].play()
            bubblez(index)
        })
    })

    const bubblez =(index)=>{
        const bub =document.createElement("div")
        balls.appendChild(bub)
        bub.style.backgroundColor=colors[index]
        bub.style.animation="jump 1s ease"
    }
})