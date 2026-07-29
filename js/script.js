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
// Product Modal

function openModal(img,title,desc){

    document.getElementById("productModal").style.display="block";

    document.getElementById("modalImage").src=img;

    document.getElementById("modalTitle").innerHTML=title;

    document.getElementById("modalDesc").innerHTML=desc;

}

document.querySelector(".close").onclick=function(){

    document.getElementById("productModal").style.display="none";

}

window.onclick=function(event){

    let modal=document.getElementById("productModal");

    if(event.target==modal){

        modal.style.display="none";

    }

}
// Preloader

window.addEventListener("load",function(){

    document.getElementById("preloader").style.display="none";

});