//this allows us to get the canvas element
const canvas = document.getElementById("canvas");

//this function manipulates what is on canvas
const ctx = canvas.getContext("2d");

//all use of file uploader in html
const reader = new FileReader();

//this grabs an img
const img = new Image();

//when passing in one argument, () is not necessary
const uploadImage = e => {
    reader.onload = () => {
        //ensures the image loads correctly on canvas
        img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0,0);
        }

    img.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener("change", uploadImage)

//this grabs image data to filter it to greyscale
const greyscale = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        const grey = data[i]*0.21 + data[i+1]*0.71 + data[i+2]*0.07;
        //this i represents the color red
        //changing it to i+1 changes it to green
        //i+2 is blue
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
    }

    ctx.putImageData(imageData, 0, 0);
}

//this grabs image data to filter it to sepia
const sepia = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        const grey = data[i]*0.21 + data[i+1]*0.71 + data[i+2]*0.07;
        data[i] = grey + 97;
        data[i+1] = grey + 59;
        data[i+2] = grey;
    }

    ctx.putImageData(imageData, 0, 0);
}

//this grabs image data to filter it to invert the color
const invert = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = 255-data[i];
        data[i+1] = 255-data[i+1];
        data[i+2] = 255-data[i+2];
    }

    ctx.putImageData(imageData, 0, 0);
}

//this grabs image data to swap RGB to RBG
const rbg = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = data[i+1];
    }

    ctx.putImageData(imageData, 0, 0);
}

//this swaps rgb to bgr
const bgr = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = data[i+2];
        data[i+1] = data[i+1];
        data[i+2] = data[i];
    }

    ctx.putImageData(imageData, 0, 0);
}

//this swaps rgb to gbr
const gbr = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = data[i+1];
        data[i+1] = data[i+2];
        data[i+2] = data[i];
    }

    ctx.putImageData(imageData, 0, 0);
}

//this swaps rgb to gbr
const grb = () => {
    const imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    const data = imageData.data

    for(let i=0; i<data.length; i+=4) {
        data[i] = data[i+1];
        data[i+1] = data[i];
        data[i+2] = data[i+2];
    }

    ctx.putImageData(imageData, 0, 0);
}

//clears effects on canvas
const clear = () => {
    img.src = reader.result;
}

document.querySelectorAll("button")[0].addEventListener("click", greyscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rbg);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", gbr);
document.querySelectorAll("button")[6].addEventListener("click", grb);
document.querySelectorAll("button")[7].addEventListener("click", clear);