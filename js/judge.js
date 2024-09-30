function showImg() {
    let ImgSrc = localStorage.getItem("imgSrc")
    const container = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = ImgSrc;
    console.log("src", ImgSrc);
    console.log("img2", img);
    container.appendChild(img);
    return img;
}
showImg()

function dissappearImg() {
    let pic = document.getElementsByClassName("imgRandomDissappear");
    console.log("dissaper", pic);
    pic.classList.add("dissapp'ear");

}
dissappearImg()

function score() {
    
}
