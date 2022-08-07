import {throttle} from 'lodash';

const form = document.querySelector('.feedback-form');
const mail = document.querySelector('input');
const textMessage = document.querySelector('textarea')
const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

form.addEventListener('input',  throttle(() => { 
    const input = {
        emailData: form.elements.email.value,
        messageData: form.elements.message.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
}, 500));

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    let { elements: { email, message } } = event.currentTarget;
    if (email.value == '' || message.value == '') { alert("Please fill in all the fields!") }
    else {
        console.log(`Send mail to: ${email.value}, message is: ${message.value}`);
        event.currentTarget.reset();
        localStorage.clear();
    }
});


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
loadStorage()

