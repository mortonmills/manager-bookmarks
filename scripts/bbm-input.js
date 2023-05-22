//OPTIONS
const fileRadio = document.getElementById("fileRadio")
const folderRadio = document.getElementById("folderRadio")
const lineRadio = document.getElementById("lineRadio")
const duplicateCheck = document.getElementById("duplicateCheck")

const readMeRadio = document.getElementById("readMeRadio")

//INPUTS
//GETTING FILES
const fileInput = document.getElementById("fileInput")
const fileMerge = document.getElementById("fileMerge")
const fileDownload = document.getElementById("fileDownload")

const progressBar = document.getElementById("progressBar")
const fileNumber = fileInput.files.length
const topPage = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
It will be read and overwritten.
DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>`
const bottomPage = `</DL><p>`
//ADDING EVENT LISTENERS
fileMerge.addEventListener('click', ()=>handleFiles(fileInput));
fileDownload.addEventListener('click', ()=>saveTextAsFile('html', mergedStr));
let mergedStr; //keep global for download


async function handleFiles(input) {
let mergedFiles = ""
let mergedArr = []
mergedStr = "" //resets value

    for (let i = 0; i < input.files.length; i++) {

        let reader = new FileReader()
        reader.readAsText(input.files[i])//should read event happen after load definition
        mergedFiles += await new Promise((resolve,reject)=>{
            reader.addEventListener('load', (e)=>{
                resolve(e.target.result);
            }
            );
        }
        );

//reader.removeEventListener('load', (e)=>{resolve(e.target.result)}

    }

    let middlePage = bookmarksMerger(mergedFiles)
  
      if (fileRadio.checked || folderRadio.checked && !duplicateCheck.checked) {
          middlePage = emptyFolder(middlePage)
    } 

  middlePage = middlePage.join("\n")

    mergedArr.push(topPage)
    mergedArr.push(middlePage)
    mergedArr.push(bottomPage)
    mergedStr = mergedArr.join('\n')
    //.replace(/PERSONAL_TOOLBAR_FOLDER="true"/gi, '')

}
