const factimages = document.querySelectorAll(".info img");
function factimageclick(e){
    this.classList.add("hoverimg");
}
factimages.forEach(image => {
    image.addEventListener("mouseover",factimageclick);
});
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("hoverimg");
}
factimages.forEach(image => image.addEventListener("transitionend",removeTransition));