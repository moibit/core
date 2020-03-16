module.exports = function(form,parentPath,filesWithHierarchy) {
    let currentFolderFilesStreams = form._streams;
    let y = 0;
    for(let i=0;i<=currentFolderFilesStreams.length;i +=3) {
        if(currentFolderFilesStreams[i] !== undefined) { 
            const targetedString = currentFolderFilesStreams[i].split(';')[2];
            const stringToBeReplaced = targetedString.substring(targetedString.indexOf('"')+1,targetedString.lastIndexOf('"'));
            const stringToBeReplacedWith = filesWithHierarchy[y++].replace(parentPath,'');
            const replacedFileNameString = currentFolderFilesStreams[i].replace(stringToBeReplaced,stringToBeReplacedWith);
            currentFolderFilesStreams[i] = replacedFileNameString;
        }
    }
    return currentFolderFilesStreams;
}