module.exports.execute2 = (html,css,jsCode) => {
    let htmlCode = html;
    let cssCode = css;
    let jsCode = jsCode;
    let output = document.querySelector('#output2');

    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}