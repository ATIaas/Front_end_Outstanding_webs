const track =document.getElementById("image-pan");

window.onmousedown = e => {
    track.dataset.mouseLastClickAt = e.clientX ;


}

window.onmouseup = e => {
    track.dataset.mouseLastClickAt = "0"

}

window.onmousemove = e => {
    if (track.dataset.mouseLastClickAt === "0") return;


    const mouseDelta = parseFloat(track.dataset.mouseLastClickAt) - e.clientX ,
        maxDelta = window.innerWidth * 2;

    const percentage = (mouseDelta / maxDelta) * -40,
        percentageNew =Math.max( Math.min(parseFloat(track.dataset.lastPercentPosition) + percentage, 0) ,-40);

    track.dataset.lastPercentPosition = percentageNew;

    track.animate({
        transform: `translate(${percentageNew}%, 0)`
    }, { duration: 4000, fill: "forwards" });

}

