let btn = document.querySelector('#btn-menu-mob')
let line1 = document.querySelector('.line-menu-mob-1')
let line2 = document.querySelector('.line-menu-mob-2')
let menuMobile = document.querySelector('#menu-mobile')
let body = document.querySelector('body')

btn.addEventListener('click', ()=>{
    line1.classList.toggle('ativo1') // O toggle faz uma alternância da classe que ela indica, se estiver ativo no site o toggle desativa e se estiver desativa ela ativa
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
    body.classList.toggle('parar')
})