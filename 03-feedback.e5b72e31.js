var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var l=r("kEUo3");const o=document.querySelector(".feedback-form"),n=document.querySelector("input"),s=document.querySelector("textarea"),i=localStorage.getItem("feedback-form-state"),u=JSON.parse(i);o.addEventListener("input",(0,l.throttle)((()=>{const e={emailData:o.elements.email.value,messageData:o.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),o.addEventListener("submit",(e=>{e.preventDefault();let{elements:{email:t,message:a}}=e.currentTarget;""==t.value||""==a.value?alert("Please fill in all the fields!"):(console.log(`Send mail to: ${t.value}, message is: ${a.value}`),e.currentTarget.reset(),localStorage.clear())}));(()=>{if(null!==i)try{n.value=u.emailData,s.innerHTML=u.messageData}catch(e){console.error("Get state error: ",e.message)}})();
//# sourceMappingURL=03-feedback.e5b72e31.js.map