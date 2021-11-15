





// function signupValidation() {
//     var email =  document.getElementById('email_signup').value.trim();
//     var phone =  document.getElementById('phone_signup').value.trim();
//     var password =  document.getElementById('pass_signup').value.trim();
//     var fconfpass =  document.getElementById('confpass_signup').value.trim();

//     if(firstName == null || firstName =="") {
//         document.getElementById('firstname_signup_small').innerHTML = "First Name is mandatory";
//         return false;
//     }

// }



var smail = document.getElementById("email_signup");
var spswd = document.getElementById("pass_signup");
var spswd2 = document.getElementById("confpass_signup");
var phone = document.getElementById("phone_signup");

function svalidate()
{
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    

    if(res.test(smail.value)!="1")
    {
        
        window.alert("Email Is Invalid");
        return false;
    }
    else if(phoneno.test(phone.value)!="1")
    {
        window.alert("Please enter a valid phone number :");
        return false;
    }
    else if(psr.test(spswd.value)!="1")
    {
        window.alert("Password Is Invalid");
        window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
        window.alert("try again");
        return false;
    }
    else  if(spswd.value!=spswd2.value)
    {
        window.alert("Passwords Doesnt Match, Please Re-enter :");
        return false;
    }
    else
    {
        window.alert("validation Success");
        return true;
    }
    
};


// $(document).ready(function () {

//     $('#pass_signup').on('keyup', function () {

//         let textElement = $(this).val()
//         let strength = 0

//         $('#typepass').find('h4').html(`Your Password: ${textElement}`)

//         if (textElement.length > 0) {
//             let sizeElements = textElement.length

//             if (sizeElements > 10) {

//                 strength += 30

//             } else {
//                 let calcMath = (sizeElements * 2)

//                 strength += calcMath

//             }

//         }

//         let lowerCase = new RegExp(/[a-z]/)
//         if (lowerCase.test(textElement)) {
//             strength += 16
//         }

//         let upperCase = new RegExp(/[A-Z]/)
//         if (upperCase.test(textElement)) {
//             strength += 18
//         }

//         let regularNumber = new RegExp(/[0-9]/i)
//         if (regularNumber.test(textElement)) {
//             strength += 16
//         }

//         let specialChars = new RegExp(/[^a-z0-9]/i)
//         if (specialChars.test(textElement)) {
//             strength += 20
//         }
        
//         //Function to produce result
//         let renderResult = (strengthData, color) => {
//             return $('#strengthResult').html(
//                 `
                          
//             <div class="progress" style="height: 40px;">
//                 <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 15px">${strength}%</strong></div>
//             </div>`
//             )
//         }

//         if (strength < 21) {
//             renderResult(strength, 'danger')//red very weak password
//         } else
//             if (strength > 20 && strength < 41) {
//                 renderResult(strength, 'warning')//orange weak password
//             } else
//                 if (strength > 40 && strength < 61) {
//                     renderResult(strength, 'secondary')//medium password
//                 } else
//                     if (strength > 60 && strength < 81) {
//                         renderResult(strength, 'info')// strong password
//                     } else {
//                         renderResult(strength, 'success')//very strong password
//                     }

        

//    });






// function validateSigninform(){  
//     var name=document.signup_form.username.value;  
//     var password=document.signup_form.password.value;  
      
//     if (name==null || name==""){  
//       alert("Name can't be blank");
     
//       return false;  
//     }else if(password.length<6){  
//       alert("Password must be at least 6 characters long.");  
//       return false;  
//       }  
//     }  



// SIGN UP FORM VALIDATION BEGIN
// function validateSignupform() {
//     var firstname = document.signup_form.firstname.value.trim();
//     var lastname = document.signup_form.lastname.value.trim();
//     var usernameEmail = document.signup_form.email.value.trim();
//     var phone = document.signup_form.phonenum.value.trim();
//     var password = document.signup_form.password.value.trim();
//     var confirmpass = document.signup_form.confirm_password.trim();

//     if (usernameEmail==null || usernameEmail=="") {
//         setErrorFor(email,'Email cannot be blank');
//     } else {
//         setSuccessFor(email);
//     }
// }

// function setErrorFor(input, message) {
//     const pardiv = input.parentElement;
//     const small = pardiv.querySelector('small');

//     small.innerText = message;

//     pardiv.className = 'pardiv error col-12';
// }
// SIGN UP FORM VALIDATION END







// const form = document.getElementById('signup_form');
// const username = document.getElementById('email_signup');
// const phone = document.getElementById('phone_signup');
// const password = document.getElementById('pass_signup');
// const confpass = document.getElementById('confpass_signup');

// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     checkInputs();
// })

// function checkInputs(){
//     const usernameValue = Username.value.trim();
//     const phoneValue = phone.value.trim();
//     const passwordValue = password.value.trim();
//     const confpassValue = confpass.value.trim();

//     if(usernameValue === '') {
//         setErrorFor(username, 'Username mandatory')
//     } else {
//         setSuccessFor(username);
//     }
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     small.innerText = message;
//     formControl.className = 'form-group error';
// }