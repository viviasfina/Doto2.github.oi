let validate=()=>{
    let emails=document.getElementById("email")
    let errorm = '';

    if (emails.value === ''){
        errorm = 'Email cannot be empty'
    }
    else if(emails.value.startsWith('.')||email.value.startsWith('@')){
        errorm = 'Email cannot start with "." or "@"'
    }
    else if(!emails.value.endsWith('@gmail.com')){
        errorm = 'Email must be end with @gmail.com'
    }

    if(errorm!== ''){
        alert(errorm)
    }
    else{
        alert('Subscribed!')
    }
}