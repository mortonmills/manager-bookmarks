let fileImages = document.getElementById("fileImages");

function listFileImage(input){

 for (let i = 0; i < input.files.length; i++) {
let filePics = document.createElement("img");
filePics.setAttribute("style", "width:20px");
filePics.setAttribute("src", "file.png");
filePics.setAttribute("title", `${input.files[i].name}`);
let fileFigure = document.createElement("figure");
let fileFigureCaption = document.createElement("figcaption");
fileFigureCaption.textContent = `${input.files[i].name}`
fileFigure.appendChild(filePics);
fileFigure.appendChild(fileFigureCaption);
fileImages.appendChild(fileFigure);

}


}