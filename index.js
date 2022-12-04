const type = document.querySelector(".type")
console.log(type);
let typeNumber = 0;
let typeText = type.innerHTML
console.log(type.innerHTML.split(""));
type.innerHTML = ""



function typeJs() {

    if (typeNumber < typeText.length) {
        type.innerHTML += typeText.charAt(typeNumber)
        typeNumber++
        console.log(typeNumber);
    }


    console.log(typeNumber);
}



let stop = setInterval(() => {
    typeJs()
}, 300)