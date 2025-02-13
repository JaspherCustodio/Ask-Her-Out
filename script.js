function moveRandomEl(element){
    element.style.position = "absolute";
    element.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    element.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("#move-random");

    if (noButton) {
        noButton.addEventListener("mouseenter", function () {
            moveRandomEl(this);
        });
    }

    if (window.location.pathname.includes("yes.html")) {
        confetti({
            particleCount: 200,
            spread: 150,
            origin: { y: 0.6 },
            scalar: 2.0,
        });

        setTimeout(() => {
            confetti({
                particleCount: 150,
                spread: 120,
                origin: { y: 0.8 },
                scalar: 2.0,
            });
        }, 2000);
    }
});