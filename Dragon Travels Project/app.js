console.log("This is a Travel Agency. This is app.js file");
// Grabbing Username, E-mail & Phone & Submit
const Username = document.getElementById("inputUsername");
const Email = document.getElementById("inputEmail");
const Phone = document.getElementById("inputPhone");
const Submit = document.getElementById("submit");
let validName, validEmail, validPhone = false;
// console.log(Username, Email, Phone);

// Creating alert function
function alert(type, boldMessage, backMessage) {
    // console.log("Alert function");
    let alertbox = document.getElementById("alertbox");
    let msg = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong> ${boldMessage} </strong> ${backMessage} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
    </div>`;
    alertbox.innerHTML = msg;
    setTimeout(() => {
        alertbox.innerHTML = ``;
    }, 3000);
}

// Adding event listener to Username, Email, & Phone
Username.addEventListener('blur', () => {
    // console.log('Username is Blurred');
    // Validate Username Here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    let str = Username.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your Username is valid');
        Username.classList.add('is-valid');
        Username.classList.remove('is-invalid');
        validName = true;
    }
    else {
        // console.log("Your Username is invalid");
        Username.classList.add('is-invalid');
        Username.classList.remove('is-valid');
        validName = false;
    }
})
Email.addEventListener('blur', () => {
    console.log('Email is Blurred');
    // Validate Email Here
    let regex = /^([a-zA-Z0-9_\.\&\-]+)@([a-zA-Z0-9_\.\&\-]+)\.([a-zA-Z]{2,7})$/
    let str = Email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your Email is valid');
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        // console.log("Your Email is invalid");
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        validEmail = false;

    }
})
Phone.addEventListener('blur', () => {
    // console.log('Phone is Blurred');
    // Validate Phone Here
    let regex = /^([0-9]{10})$/
    let str = Phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your Phone is valid');
        Phone.classList.add('is-valid');
        Phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        // console.log("Your Phone is invalid");
        Phone.classList.add('is-invalid');
        Phone.classList.remove('is-valid');
        validPhone = false;
    }
})

Submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You have clicked on Submit');
    //Submit Your Form Here
    // You can make a fetch request of submitting form to the database
    // Submit the form only if everything is valid else show error
    if (validName && validEmail && validPhone) {
        console.log('Username, Email, Phone are valid. Submitting the form');
        alert('success', 'Form Submitted Successfully :', 'Your form has been submitted')
    }
    else {
        console.log('One of Username, Email, or Phone are not valid. Hence, Not Submitting the Form. Please Correct the Errors & Try Again!');
        alert('danger', 'Form Not Submitted :', 'Your form has not been submitted due to invalid input');
    }
})
