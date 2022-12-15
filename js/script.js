// function itemMenuLeftSide() {
//     var titleText = document.querySelector(".title-link")
//     var backgroundText = document.querySelector(".img-link")
//     titleText.classList.toggle("active")
//     backgroundText.classList.toggle("active")
// }

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const irma = targetEl.previousSibling;;
    const elementoPai = targetEl.parentNode

    console.log(targetEl)
    console.log(elementoPai)
    console.log(irma)


    if(elementoPai.classList.contains('pai')) {
        elementoPai.classList.toggle("active")
    }
})