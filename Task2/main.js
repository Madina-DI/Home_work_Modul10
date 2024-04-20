const btn = document.querySelector(".btn_click");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;

const windowClientWidth = document.documentElement.clientWidth;
const windowClientHeight = document.documentElement.clientHeight;

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

btn.addEventListener('click', () => {
    alert(`Размер экырана: ${screenWidth}px x ${screenHeight}px. 
Размер окна браузера с полосой прокрутки: ${windowInnerWidth}px x ${windowInnerHeight}px.
Размер окна браузера без полосы прокрутки: ${windowClientWidth}px x ${windowClientHeight}px.
Размер веб-страницы: ${pageWidth}px x ${pageHeight}px.`);
})