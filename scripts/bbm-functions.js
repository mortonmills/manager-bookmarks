function fileDup(bookmarks) {
    let merged = []
    merged.push(`<DT><H3></H3>`)
    //FILE ${++counter}
    bookmarks.forEach(el=>{
    progressBar.value = ++progessStatus

        if (el.includes("DT>") || el.includes("DL>")) {

            el.includes("Bookmarks bar") ? merged.push(el.replace("Bookmarks bar", `${fileInput.files[counter++].name}`)) : merged.push(el)
        }

    }
    )

    return merged

}

function fileNoDup(bookmarks) {
    let merged = []
    merged.push(`<DT><H3></H3>`)
    //FILE ${++counter}
    bookmarks.forEach(el=>{
    progressBar.value = ++progessStatus

        if (el.includes("DT>") || el.includes("DL>")) {

            if (el.includes("Bookmarks bar")) {
                merged.push(el.replace("Bookmarks bar", `${fileInput.files[counter++].name}`))
            } else if (el.includes("HREF=")) {
                let site = el.match(regex)
                let arr2 = merged.flat(3).join()

                !arr2.includes(site[1]) ? merged.push(el) : copyCount++
            } else {
                merged.push(el)
            }
        }
    }
    )

    return merged
}

function folderDup(bookmarks) {

    let merged = []
    merged.push(`<DT><H3>DSF</H3>`)
    //FILE ${++counter}
    bookmarks.forEach(el=>{
    progressBar.value = ++progessStatus

        if (el.includes("DT>") || el.includes("DL>")) {

            el.includes("Bookmarks bar") ? merged.push(el.replace("Bookmarks bar", `MERGED`)) : merged.push(el)
        }

    }
    )

    return merged
}

function folderNoDup(bookmarks) {
    let merged = []
    merged.push(`<DT><H3>DSF</H3>`)
    //FILE ${++counter}
    bookmarks.forEach(el=>{
    progressBar.value = ++progessStatus

        if (el.includes("DT>") || el.includes("DL>")) {

            if (el.includes("Bookmarks bar")) {
                merged.push(el.replace("Bookmarks bar", `MERGED`))

            } else if (el.includes("HREF=")) {

                let site = el.match(regex)
                let arr2 = merged.flat(3).join()

                !arr2.includes(site[1]) ? merged.push(el) : copyCount++

            } else {
                merged.push(el)
                
            }
        }

    }
    )

    return merged
}

function lineDup(bookmarks) {
    let merged = []
    bookmarks.forEach(el=>{
            progressBar.value = ++progessStatus
        if (el.includes("HREF=")) {
            merged.push(el)
        }
    }
    )
    return merged
}

function lineNoDup(bookmarks) {
    let merged = []
    bookmarks.forEach(el=>{
            progressBar.value = ++progessStatus

        if (el.includes("HREF=")) {

            let site = el.match(regex)
            let arr2 = merged.flat(3).join()

            !arr2.includes(site[1]) ? merged.push(el) : copyCount++

        }
    }
    )
    return merged
}

//remove blank items in array
function emptyFolder(bookArr) {
    let bookmarks = bookArr
    let base = true
    bookmarks.forEach((el,i,arr)=>{

        if (arr[i].includes(`H3`) 
            && arr[i + 1].includes(`<DL>`) 
            && arr[i + 2].includes(`</DL>`)){//may have to escape) 
            arr.splice(i, 3)
            base = false
        }
    }
    )

    if(base){
        return bookmarks
    }

    return emptyFolder(bookmarks)
}

/*
        if( str[i].includes(`PERSONAL_TOOLBAR_FOLDER`)
        && str[i + 1].includes(`<DL>`) 
       && str[i - 1].includes(`<DL>`)){
        str[i - 1] = ""
        str[i] = ""
        str[i + 1] = ""
        }
//need to remove two /DL per end of bookmarks file
//remove in preprocessing in file read
//first remove white space and empty new lines then take out /DL
//toolbar remover first in preprocess, then folder remover, folder remover may intefere if not

*/
