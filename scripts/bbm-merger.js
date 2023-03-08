let counter
let copyCount
let progessStatus
//"i" for if HREF is lowercase
let regex = new RegExp(`HREF="(.*?)"`,`i`)
//BOOKMARKS MERGER
function bookmarksMerger(bookmarks) {
    counter = 0
    copyCount = 0
    progessStatus = 0
    bookmarks = bookmarks.split("\n")
    progressBar.max = bookmarks.length

    if (fileRadio.checked) {
        return duplicateCheck.checked ? fileDup(bookmarks) : fileNoDup(bookmarks)
    } else if (folderRadio.checked) {
        return duplicateCheck.checked ? folderDup(bookmarks) : folderNoDup(bookmarks)
    } else if (lineRadio.checked) {
        return duplicateCheck.checked ? lineDup(bookmarks) : lineNoDup(bookmarks)
    }
    return console.log("Error")
}
