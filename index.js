const toggleShow = document.querySelector('#password-toggle-show');
const toggleHide = document.querySelector('#password-toggle-hide');
const passwordField = document.querySelector('#password');

toggleShow.addEventListener('click', (e) => {
    toggleShow.style.display = 'none'
    toggleHide.style.display = ''
    passwordField.setAttribute('type', 'text')
})

toggleHide.addEventListener('click', (e) => {
    toggleHide.style.display = 'none'
    toggleShow.style.display = ''
    passwordField.setAttribute('type', 'password')
})
