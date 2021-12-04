const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const countEl = document.querySelector('.span')
let count = 0

minus.addEventListener('click', function () {
    count--
    countEl.textContent = count
    if (count < 0) {
        countEl.style.color = `red`
    }
})
plus.addEventListener('click', function () {
    count++
    if (count > 0) {
        countEl.style.color = `green`
    }
    countEl.textContent = count
})


