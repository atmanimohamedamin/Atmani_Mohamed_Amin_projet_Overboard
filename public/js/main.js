let container = document.getElementById("container");
let color = ["#e74c3c", "8e44ad", "e6e22", "3ece71"]
let square = 500;

for (let i = 0; i < square; i++) {
    const.square = document.createElement("div")
    square.classList.add("square");
    
    square.addEventListener("mouseover", () => setColor(square))

    square.addEventListener("mouseover", () => removeColor(square))

    container.appendChild(square)

}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxshadow = `0 0 2px ${color}`, `0 0 10px ${color}`

}

function removeColor(element) {
    element.style.background = "#1d1d1d"
    element.style.boxshadow = `0 0 2px #0000`
}

function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
    
}
