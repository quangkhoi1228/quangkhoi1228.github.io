//craw css
var a = '';
document.querySelectorAll('[href^=css]').forEach(function (item) {
    a += '   curl https://lmpixels.com/demo/breezycv/light/4/'
        + item.getAttribute('href') +
        ' -o ' +
        item.getAttribute('href').split('/')[item.getAttribute('href').split('/').length - 1]
        + ';';
});
console.log(a)



//craw js
var b = '';
document.querySelectorAll('[src^=js]').forEach(function (item) {
    b += '   curl https://lmpixels.com/demo/breezycv/light/4/'
        + item.getAttribute('src') +
        ' -o ' + item.getAttribute('src').split('/')[item.getAttribute('src').split('/').length - 1] + ';';
}); console.log(b)


//craw img
var c = '';
document.querySelectorAll('img[src]').forEach(function (item) {
    c += '   curl https://lmpixels.com/demo/breezycv/light/4/'
        + item.getAttribute('src') +
        ' -o ' + item.getAttribute('src').split('/')[item.getAttribute('src').split('/').length - 1] + ';';
}); console.log(c)
