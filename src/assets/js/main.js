// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1

function burgerActive(){
    var burger = document.querySelector('.burger')
    var nav = document.querySelector('#navbarHeader')
    burger.classList.toggle('is-active')
    nav.classList.toggle('is-active')
}

export default burgerActive;