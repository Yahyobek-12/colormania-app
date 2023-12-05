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
        resultTxt.style.border = `3px solid ${newColor}`;
    } else {
        
    }
    e.target.reset();
});


// For Loader Page

const loaderShort = document.querySelector(".loader-short");
const loaderPage = document.querySelector(".loader");
const counter = document.querySelector(".count")

let pos = 1;
timerId = setInterval(addWidth, 100);

function addWidth() {
    if (pos === 100) {
        clearInterval()

        setTimeout(() => {
            loaderPage.classList.add(newClass)
        }, [timerId])

        counter.classList.add(newClass)
        
    } else {
        pos++
        loaderShort.style.width = pos + "%"
        counter.innerHTML = pos + "%"
    }
}
addWidth()
