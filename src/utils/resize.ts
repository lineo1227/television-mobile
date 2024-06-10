function resizeListener() {
    let designSize = 375;
    let html = document.documentElement;
    let clientW = html.clientWidth;
    let sizeNum = 100;

    let htmlRem = (clientW * sizeNum) / designSize;
    html.style.fontSize = htmlRem / 100 + "px";
}
export default resizeListener;