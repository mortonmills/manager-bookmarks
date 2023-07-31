//EVENT HANDLERS
document.querySelectorAll(".select")
.forEach(x=> x.addEventListener("click", selectColor))

function selectColor(event){
  document.querySelectorAll(".select")
.forEach(x => {x.style.backgroundColor = "white"})

let background = "#c6e9ff"

if(event.target.localName == "img"){
  event.target.parentNode.style.backgroundColor = background
  event.target.parentNode.querySelector("input").checked = true
}
else{
  event.target.style.backgroundColor = background
  event.target.querySelector("input").checked = true
}
}

document.querySelector(".select").click()

// document.querySelectorAll(".select > img")
// .forEach(x=> x.addEventListener("click", (event)=> event.target.parentNode.style.backgroundColor = "pink"))


  //GET DATE FOR FILENAME SAVE ..."bookmarksMerged_12_20_2022.html
  const date = new Date();
  const [month, day, year] = [
    (date.getMonth() + 1),//month is zero based
    date.getDate(),
    date.getFullYear(),
  ];

  //FILE SAVING
  function saveTextAsFile(filetype, contents){      
    var textToWrite = contents;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = `bookmarks_merged_${month}_${day}_${year}.${filetype}`; //name file here

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = `bookmarksMerged`;//<--custom change, find out meaning

    window.URL = window.URL || window.webkitURL;

    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);

    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  function destroyClickedElement(event){
    document.body.removeChild(event.target);
  }
