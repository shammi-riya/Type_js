const type = document.querySelector(".type");
let typeNumber = 0;
let typeText = type.innerHTML
let textArr = type.innerHTML.split("");
type.innerHTML = ""

function typeJs() {

    if (typeNumber < typeText.length) {
        type.innerHTML += typeText.charAt(typeNumber)
        typeNumber++

    } else {
        textArr.pop()
        type.innerHTML = textArr.join("")
        if (textArr == 0) {
            typeNumber = 0

        }
    }

    console.log(typeNumber);
}

let stop = setInterval(() => {
    typeJs()
}, 350)