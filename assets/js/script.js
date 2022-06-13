const form = document.querySelector('#registerForm')
// const emailRegEx = /(\w\.?)+@[\w\.-]+\.\w{2,50}/
const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegEx = /^[A-Za-z]+$/
const passRegEx = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/


form.addEventListener('submit', e => {
    e.preventDefault()

    validation()
})

function validation() {

    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let confirmPassword = document.querySelector('#confirmPassword')

    let firstNameValue = firstName.value.trim()
    let lastNameValue = lastName.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let confirmPasswordValue = confirmPassword.value.trim()

    if (firstNameValue === '') {
        alert('First Name Field is Required')
        firstName.focus()
        return false
    } else if (!firstNameValue.match(nameRegEx)) {
        alert("Enter Valid Name")
        firstName.focus()
        return false
    } else if (lastNameValue === '') {
        alert('Last Name Field is Required')
        lastName.focus()
        return false
    } else if (!lastNameValue.match(nameRegEx)) {
        alert("Enter Valid Name")
        lastName.focus()
        return false
    } else if (emailValue === '') {
        alert('Email Field is Required')
        email.focus()
        return false
    } else if (!emailValue.match(emailRegEx)) {
        alert("Enter Valid Email")
        email.focus()
        return false
    } else if (passwordValue === '') {
        alert('Password Field is Required')
        password.focus()
        return false
    } else if (!passwordValue.match(passRegEx)) {
        alert('Password must contain at least 1 lowercase alphabetical character,  1 uppercase alphabetical character, 1 numeric character, 1 special character, must be eight characters or longer')
        password.focus()
        return false
    } else if (confirmPasswordValue === '') {
        alert('This field is Required')
        confirmPassword.focus()
        return false
    } else if (passwordValue !== confirmPasswordValue) {
        alert('Password do not match')
        confirmPassword.focus()
        return false
    } else {
        firstName = firstNameValue
        lastName = lastNameValue
        email = emailValue
        password = passwordValue
        confirmPassword = confirmPasswordValue

        let cred = localStorage;
        cred.setItem('username', firstName)
        cred.setItem('password', password)
        
        location.href = './login.html'
        // return true
    }
}


// const setError = (element, message) => {
//     const inputControl = element.parentElement
//     const errorDisplay = inputControl.querySelector('.error')

//     errorDisplay.innerText = message
//     inputControl.classList.add('is-invalid')
//     inputControl.classList.remove('is-valid')
// } 

// const setSuccess = element => {
//     const inputControl = element.parentElement
//     const errorDisplay = inputControl.querySelector('.error')

//     errorDisplay.innerText = ''
//     inputControl.classList.add('is-valid')
//     inputControl.classList.remove('is-valid')
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const firstNameValue = firstName.value.trim()
//     const lastNameValue = lastName.value.trim()
//     const emailValue = email.value.trim()
//     const passwordValue = password.value.trim()
//     const confirmPasswordValue = confirmPassword.value.trim()

//     if (firstNameValue === '') {
//         setError(firstName, 'First Name is Required')
//     } else {
//         setSuccess(firstName)
//     } 

//     if (lastNameValue === '') {
//         setError(lastName, 'Last Name is Required')
//     } else {
//         setSuccess(lastName)
//     }

//     if (emailValue === '') {
//         setError(email, 'Email is Required')
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Please provide a valid email address')
//     } else {
//         setSuccess(email)
//     }

//     if (passwordValue === '') {
//         setError(password, 'Password is required')
//     } else if (passwordValue.length < 8) {
//         setError(password, 'Password must be at least 8 characters long')
//     } else {
//         setSuccess(password)
//     }

//     if (confirmPasswordValue === '') {
//         setError(confirmPassword, 'Please confirm your password')
//     } else if (confirmPasswordValue !== passwordValue) {
//         setError(confirmPassword, 'Passwords doesn\'t match')
//     } else {
//         setSuccess(confirmPassword)
//     }

// }


