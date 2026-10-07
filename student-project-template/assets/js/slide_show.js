const slides =document.getElementById("analysis-slides");

window.onmousedown = (e) => {
    const mouseX = e.clientX,
        halfWay = window.innerWidth / 2 ;

    const slideNew = parseInt(slides.dataset.currentSlide) + (mouseX >=  halfWay ? 1 : -1);

    const slideNext = Math.min(Math.max( slideNew, 0), 2);

    const slideOffset = slideNext * parseInt(slides.dataset.transitionAmount) ;

    slides.style.transform = `translate(0%,-${slideOffset}%)` ;

    slides.dataset.currentSlide = slideNext;
};
