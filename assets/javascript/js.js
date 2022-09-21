const registerBtn = document.querySelector('.register');
const loginBtn = document.querySelector('.login');
const overlay = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');
const loginShow = document.querySelector('.login-show')
const registerShow = document.querySelector('.register-show')
const exits = document.querySelectorAll('.btn--normal')
const authFormBtn = document.querySelectorAll('.auth-form__switch-btn')
const changeImg = document.querySelectorAll('.home-product-item__img')


function addOverlay() {
    modal.classList.remove('hide')
    overlay.classList.remove('hide')
}
function removeOverlay() {
    modal.classList.add('hide')
    overlay.classList.add('hide')
    registerShow.classList.add('hide')
    loginShow.classList.add('hide')
}
registerBtn.addEventListener('click', () => {
    addOverlay();
    registerShow.classList.remove('hide')   
})

loginBtn.addEventListener('click', () => {
    addOverlay();
    loginShow.classList.remove('hide')   
})



document.addEventListener('keyup', (e) => {
    if(e.keyCode === 27) {
        removeOverlay()
    }
})

exits.forEach((exit) => {
    exit.addEventListener('click', () => {
        removeOverlay()
    })
})

overlay.addEventListener('click', () => {
    removeOverlay();
})

authFormBtn.forEach((btn, index) => {
    if(index === 0) {
        btn.addEventListener('click', () =>{
            registerShow.classList.add('hide')
            loginShow.classList.remove('hide')
        })
    } else {
        btn.addEventListener('click', () => {
            registerShow.classList.remove('hide')
                loginShow.classList.add('hide')
        })
    }
})



changeImg.forEach((img, index) => {
    img.addEventListener('mouseover', () => {
        img.style.backgroundImage = `url(assets/images/SP/c${index}.jpg)`
    })
})

changeImg.forEach((img, index) => {
    img.addEventListener('mouseout', () => {
        img.style.backgroundImage = `url(assets/images/SP/sp${index}.jpg)`
    })
})