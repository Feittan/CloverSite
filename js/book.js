
const form = document.getElementById('form')
const username = document.getElementById('username')
const phone = document.getElementById('phone')
const check_in = document.getElementById('check_in')
const check_out = document.getElementById('check_out')
const adults = document.getElementById('adults')
const children = document.getElementById('children')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get values from the inputs
   const usernameValue = username.value.trim();
   const phoneValue = phone.value.trim();
   const checkinValue = check_in.value.trim();
   const checkoutValue = check_out.value.trim();
   const adultsValue = adults.value.trim();
   const childrenValue = children.value.trim();

   if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'The field is required')
   } else {
    // add succes class
    setSuccessFor(username)
   }

   if(phoneValue === ''){
        setErrorFor(phone,'The field is required')
    } else if(isAN(phoneValue)){
        setErrorFor(phone,'Not valid number')
    } else{
        setSuccessFor(phone)
        }     

   if(checkinValue === ''){
    setErrorFor(check_in,'The field is required')
    } else {
    setSuccessFor(check_in)
    }

    if(checkoutValue === ''){
        setErrorFor(check_out,'The field is required')
        } else {
        setSuccessFor(check_out)
        }
    
    if(adultsValue === ''){
        setErrorFor(adults,'The field is required')
        } else if(isAN(adultsValue)){
        setErrorFor(adults,'Enter the number')
        } else{
        setSuccessFor(adults)
        }     
        
    if(childrenValue === ''){
            setErrorFor(children,'The field is required')
        } else if(isAN(childrenValue)){
            setErrorFor(children,'Enter the number')
        } else{
             setSuccessFor(children)
        }      
}

function setErrorFor(input,message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message;

    formControl.className = 'form_control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form_control success'
}

function isAN(value) {
    if(isNaN(value)){
        return value
    }
  }

function isNumber(value) {
    if(isNaN(value)){
        return value
    }
  }
