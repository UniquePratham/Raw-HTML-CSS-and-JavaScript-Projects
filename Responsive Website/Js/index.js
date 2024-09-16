hamBurger = document.querySelector('.hamBurger');
navBar = document.querySelector('.navBar');
leftNav = document.querySelector('.leftNav');
rightNav = document.querySelector('.rightNav');
hamBurger.addEventListener('click', () => {
    navBar.classList.toggle('hNavResp');
    leftNav.classList.toggle('vHiddenResp');
    rightNav.classList.toggle('vHiddenResp');
})