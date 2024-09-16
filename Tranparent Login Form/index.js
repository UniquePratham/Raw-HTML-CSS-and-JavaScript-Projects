let passWord = document.getElementById("passWord");
let eye = document.getElementById('eye');
// passWord.addEventListener('click', () => {
//     eye.style.display = "inline-block";
// });
document.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target == passWord) {
        eye.style.display = "inline-block";
        // console.log("inline-block inside if clicked password");
    }
    else if (e.target == eye) {
        eyeChange();
        // console.log("inline-block inside if clicked eye");
    }
    else {
        eye.style.display = "none";
        // console.log("none inside if");
    }
})
function eyeChange() {
    if (eye.classList == 'fa fa-eye') {
        eye.removeAttribute('class');
        eye.setAttribute('class', 'fa fa-eye-slash');
        passWord.removeAttribute('type');
        passWord.setAttribute('type', 'password');
    }
    else {
        eye.removeAttribute('class');
        eye.setAttribute('class', 'fa fa-eye');
        passWord.removeAttribute('type');
        passWord.setAttribute('type', 'text');
    }
}