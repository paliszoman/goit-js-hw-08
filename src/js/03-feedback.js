import {throttle} from 'lodash';

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('input');
const textMessage = document.querySelector('textarea')
const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

let submitForm = (event) => { 
    event.preventDefault();
    let { elements: { email, message } } = event.currentTarget;
    if (email.value == '' || message.value == '') { alert("Please fill in all the fields!") }
    else {
        console.log(`Send mail to: ${email.value}, message is: ${message.value}`);
        event.currentTarget.reset();
        localStorage.clear();
    }
}

let formData = (event) => { 
    let { elements: { email, message } } = event.currentTarget;
    let input = {
        emailData: email.value,
        messageData: message.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
}

let loadStorage = () => { 
    if (savedData !== null) {
        try {
            mail.value = parsedData.emailData;
            textMessage.innerHTML = parsedData.messageData;
        } catch (error) {
            console.error("Get state error: ", error.message);
        }
    }
};
form.addEventListener('input',  throttle(formData , 500));
form.addEventListener('submit', submitForm);
loadStorage()

