const btn = document.querySelector('.js_btn');
const iconFirst = document.querySelector(".btn_first_icon");
const iconSecond = document.querySelector(".btn_second_icon");

btn.addEventListener('click', () => {
  btn.classList.toggle('btn--magic');
  toggleIcons();
});

function toggleIcons() {

    if (iconFirst.style.display === "inline") {
        iconFirst.style.display = "none";
        iconSecond.style.display = "inline";
    } else {
        iconFirst.style.display = "inline";
        iconSecond.style.display = "none"
    }
}