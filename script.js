const newClass = "active";
const customColor = "#f1f2f3";

const form = document.querySelector("form");
const inp = document.querySelector("input");
const body = document.querySelector("body");
const resultTxt = document.querySelector(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newColor = inp.value

    if(newColor) {
        body.style.background = newColor;
        resultTxt.textContent = newColor;
        resultTxt.style.color = newColor;
    } else {
        body.style.background = customColor;
        resultTxt.textContent = "CustomColor:" + " " + customColor;
    }

    e.target.reset();
});


// For Loader Page

const loaderShort = document.querySelector(".loader-short");
const loaderPage = document.querySelector(".loader");
const counter = document.querySelector(".counter")

let pos = 1;
timerId = setInterval(addWidth, 50);

function addWidth() {
    if (pos === 100) {
        clearInterval()
    } else {
        console.log(pos++);
        loaderShort.style.width = pos + "%"
        counter.classList.add(newClass)
        counter.innerHTML = pos + "%"
    }
}

setTimeout(() => {
    loaderPage.classList.add(newClass)
    
}, 5500)
