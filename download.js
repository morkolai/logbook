function prepareTXT() {

    let file = ""
    const rows = document.getElementById('log').children;

    for (let row of rows) {
        file += row.childNodes[0].childNodes[0].data;
        file += ' ' + row.childNodes[1].childNodes[0].data + '\n';
    }

    return file;
}

function executeDownload(filename, text) {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function download() {
    executeDownload("log.txt", prepareTXT());
}