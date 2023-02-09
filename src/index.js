const par = document.getElementsByTagName('p')
const heads = document.querySelectorAll ('.question div:first-child')
const icons = document.querySelectorAll('.question div:nth-child(2)')
const iconsShow = document.querySelectorAll('.question div:nth-child(3)')


const add = function () {
    par[0].className = 'active'
    icons[0].className = 'hide'
    iconsShow[0].className = 'active'
    heads[0].className = 'headActive'
}
const add1 = function () {
    par[1].className = 'active'
    icons[1].className = 'hide'
    iconsShow[1].className = 'active'
    heads[1].className = 'headActive'
}
const add2 = function () {
    par[2].className = 'active'
    icons[2].className = 'hide'
    iconsShow[2].className = 'active'
    heads[2].className = 'headActive'
}
const add3 = function () {
    par[3].className = 'active'
    icons[3].className = 'hide'
    iconsShow[3].className = 'active'
    heads[3].className = 'headActive'
}
const add4 = function () {
    par[4].className = 'active'
    icons[4].className = 'hide'
    iconsShow[4].className = 'active'
    heads[4].className = 'headActive'
}
const remove = function () {
    par[0].className = 'hide'
    icons[0].className = 'active'
    iconsShow[0].className = 'hide'
    heads[0].className = ''
}
const remove1 = function () {
    par[1].className = 'hide'
    icons[1].className = 'active'
    iconsShow[1].className = 'hide'
    heads[1].className = ''
}
const remove2 = function () {
    par[2].className = 'hide'
    icons[2].className = 'active'
    iconsShow[2].className = 'hide'
    heads[2].className = ''
}
const remove3 = function () {
    par[3].className = 'hide'
    icons[3].className = 'active'
    iconsShow[3].className = 'hide'
    heads[3].className = ''
}
const remove4 = function () {
    par[4].className = 'hide'
    icons[4].className = 'active'
    iconsShow[4].className = 'hide'
    heads[4].className = ""
}
