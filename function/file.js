function getFilesName(messageFile) {
    if (messageFile.length === 0) {
        return null;
    }
    return messageFile.map(file => file.path).join('||');
}

module.exports = {
    getFilesName
}