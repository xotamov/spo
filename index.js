let buttons = document.querySelectorAll(".button")
let bagroude = document.querySelector('.bagroude')
let text = document.querySelector(".color")

buttons.forEach((button) =>{
    button.onclick = () => {
        let road = button.getAttribute('data-img')
        bagroude.style.backgroundImage = `url(${pic[road]})`
        console.log(pic[road]);
            
    }
})

let alltext = [
    {
    gold: "gold",
    grey: "grey",
    black: "black",
    white: "white"
},
pic = {
    gold: "./img/gold.jpg",
    black: "./img/grey.jpg",
    grey: "./img/black.jpg",
    white: "./img/white.jpg",
}
]

onbuttons.forEach(box => {
    box.onmouseover = ()=> {
        let roads = button.getAttribute('data-img')
        if(alltext === pic){
            onbuttons.classList.add(alltext[roads])
        }else{
            onbuttons.classList.remove(alltex[roads])    
        }
    }
})




