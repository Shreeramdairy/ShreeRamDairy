const slider = document.getElementById("slider-image");

if (slider) {
    setInterval(() => {

        index++;

        if(index >= images.length){
            index = 0;
        }

        slider.src = images[index];

    }, 3000);
}