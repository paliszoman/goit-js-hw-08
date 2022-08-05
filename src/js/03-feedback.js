import { throttle } from 'lodash';

let submitForm = (event) => { 
    event.preventDefault();
    let { elements: { email, message } } = event.currentTarget;
    if (email.value == '' || message.value == '') { alert("Please fill in all the fields!") }
    else {
        localStorage.removeItem("feedback-form-state");
        console.log(`Send mail to: ${email.value}, message is: ${message.value}`);
        event.currentTarget.reset();
    }
    
}

let formData = (event) => { 
    event.preventDefault();
    let { elements: { email, message } } = event.currentTarget;
    let input = {
        emailData: email.value,
        messageData: message.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
   
}

let loadStorage = () => { 
    let savedData = localStorage.getItem("feedback-form-state");
    savedData = JSON.parse(savedData);
    
    if (savedData.emailData !== '' || savedData.messageData !== '') {
        try {
            form.elements.email.value = savedData.emailData;
            form.elements.message.innerHTML = savedData.messageData;
        } catch (error) {
            console.error("Get state error: ", error.message);
        }
    }
  
};





let form = document.querySelector('.feedback-form')
let throttled = throttle(function () { loadStorage() }, 500);

form.addEventListener('submit', submitForm);
form.addEventListener('input',  formData );
throttled()

