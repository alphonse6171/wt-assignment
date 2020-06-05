function strength() {
    alert = document.getElementById('alert')
    password = document.form.pwd.value
    confirmPassword = document.form.confirm.value
    if (password.length <= 6) {
        alert.innerHTML = "Weak Password"
        alert.style.color = "red"
    }
    else {
        alert.innerHTML = "Strong Password"
        alert.style.color = "green"
    }
}
function validate() {
    name = document.form.name.value
    username = document.form.username.value
    email = document.form.mail.value
    mobile = document.form.phone.value
    course = document.form.course.value
    password = document.form.pwd.value
    confirmPassword = document.form.confirm.value

    if(name == '' || username == '' || email == '' || mobile == '' ||  course =='' || password =='' || confirmPassword == ''){
        alert("Form incomplete")
        return false
    }
    else if (email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.indexOf('@') == 0) {
        alert("Please enter a valid email-ID")
        return false
    }
    else if(mobile.length < 10){
        alert("Please enter a valid mobile number")
        return false
    }
    else if (password != confirmPassword) {
        alert("Password not matching. Try again")
        return false
    }
    else{
        confirm("Press OK to submit")
        return true
    }
}