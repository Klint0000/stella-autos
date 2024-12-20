var i = 0;
var images = [];
var time = 5000;



images[0] = './pics/car2.jpg';
images[1] = './pics/car3.jpg';
images[2] = './pics/car4.jpg';
images[3] = './pics/car5.jpg';
images[4] = './pics/car6.jpg';



function changeImage() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }


    setTimeout('changeImage()', time);

}

window.onload = changeImage();