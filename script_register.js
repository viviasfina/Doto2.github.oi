let validateForm = () =>{
    let username = document.getElementById('username')
    let email = document.getElementById('email3')
    let password = document.getElementById('password')
    let region = document.getElementById('region')
    let dob = document.getElementById('birthdate')
    let error = '';
    


    if (username.value.length == 0){
        error = 'Username cannot be empty'
    }
    else if (username.value.length <=6){
        error = 'Username length must be more than 6 character'
    }
    else if (email.value === ''){
        error = 'Email cannot be empty'
    }
    else if(email.value.startsWith('.')||email.value.startsWith('@')){
        error = 'Email cannot start with "." or "@"'
    }
    else if(!email.value.endsWith('@gmail.com')){
        error = 'Email must be end with @gmail.com'
    }
    else if(password.value.length == 0){
        error = 'Password cannot be empty'
    }
    else if (password.value.length <8){
        error = 'Password length must be more or equal to 8'
    }
    else if (!region.value){ //ini yang nasionality
        error = 'Please pick your region'
    }

    else if (!dob.value){ // ini yang date
        error= 'Please pick your birthdate'
    }

    if(error!== ''){
        alert(error)
    }
    else{
        alert('Form has been submitted')
    }
}
