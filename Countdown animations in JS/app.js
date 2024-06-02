// Деревянный код, с жесткими параметрами. 

// const changeTime = 10000
// let startNumber = 1
// const max = 200

// const interval = setInterval(() => {
//     startNumber++
//     document.querySelector(".start").textContent = startNumber
//     if (startNumber>=max) clearInterval(interval)
// }, Math.ceil(changeTime/max));

// Универсальный код. Тут нет глобальных переменных, кроме набора elements.
const elements = document.querySelectorAll(".start")
elements.forEach(entry => {
    const changeTime = +entry.getAttribute("time")
    let startNumber = +entry.textContent
    const max = +entry.getAttribute("max")

    const interval = setInterval(() => {
        if(max > startNumber) {

        
        startNumber++
        entry.textContent = startNumber
        if (startNumber >= max) clearInterval(interval)}
        else {
            startNumber--
            entry.textContent = startNumber
if (startNumber <= max) clearInterval(interval)
        }
    }, Math.ceil(changeTime/max));
})


