function moveRandomEl(element){
    element.style.position = "absolute";
    element.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    element.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

document.querySelector("#move-random").addEventListener("mouseenter", function () {
    moveRandomEl(this);
});