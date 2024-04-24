var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Please input a name";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Input full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="color: #189a73;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Input Phone Number";
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = "Input 11 digits phone number ";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Input only digits";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="color: #189a73;"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Input Email";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Input valid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="color: #189a73;"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var leftCharac = required - message.length;

    if(leftCharac > 0){
        messageError.innerHTML = leftCharac + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check" style="color: #189a73;"></i>';
    return true;
}

function validateForm(event){
    event.preventDefault();
    setTimeout(() => { window.location.reload(); }, 10000);
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML = "Please fix errors to submit";
        setTimeout(() => { submitError.style.display="none"; }, 3000);
        return false;
    }

    // After successful validation, get form inputs and show them in the console
    var name = document.getElementById("contact-name").value;
    var phone = document.getElementById("contact-phone").value;
    var email = document.getElementById("contact-email").value;
    var message = document.getElementById("contact-message").value;

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    return true;
}


