const H1 = document.querySelector(".H1");
const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

const h1Text = H1.innerText;
const paraText = para.innerText;
const btnText = btn.innerText;  

const charachters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; //62 characters.

let iteration = 0;

function randomText(){
    const str = h1Text.split("").map((char, index) => {
        if (index < iteration) {
            return char
        }
        return charachters.split("")[Math.floor(Math.random() * charachters.length)]
    }).join("");
    
    H1.innerText = str;

    iteration += 0.25
}

setInterval ( randomText, 30);

addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY); 
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});