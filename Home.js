const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const sliderButtons = document.querySelectorAll(".slider-wrapper .slide-button");


    sliderButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount,behavior: "smooth" });
        });
    });
}

window.addEventListener("load",initSlider)