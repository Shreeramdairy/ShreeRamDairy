const images = [
    "images/banner.png",
    "images/milk.png",
    "images/curd.png",
    "images/buttermilk.png",
    "images/paneer.png",
    "images/shrikhand.png"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("slider-image").src = images[index];

}, 3000);