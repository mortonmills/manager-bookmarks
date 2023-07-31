//EVENT HANDLERS
document.querySelectorAll(".select")
.forEach(x=> x.addEventListener("click", selectColor))

function selectColor(event){
  document.querySelectorAll(".select")
.forEach(x => {x.style.backgroundColor = "grey"})
event.target.style.backgroundColor = "pink"
document.querySelectorAll(".select > input")
.forEach(x=> {
  if(x.parentNode.style.backgroundColor == "pink"){
x.checked = true
  }
  
})
// event.target

}

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
