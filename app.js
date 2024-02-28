let bg = document.querySelector("div")

function randomColor(){
    return Math.floor(Math.random()*255);
}
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h = document.querySelector("h1");
    const col = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    h.innerText = col;
    h.style.color = col;
    bg.style.backgroundColor = col;
    console.log("color updated");
});
