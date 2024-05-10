function openLoginForm(){
    document.getElementById('row_2').style.display="block";
    document.getElementById('row_1').style.display="none";
}
function openSignupForm(){
    document.getElementById('row_1').style.display="block";
    document.getElementById('row_2').style.display="none";
}

const fullNameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const mobileInput=document.getElementById('mobile');
const passwordInput=document.getElementById('password');
const confirmInput=document.getElementById('confirm');
const btnInput=document.getElementById('btn-submit');
const userFormInput=document.getElementById('user-register-form');

userFormInput.addEventListener('submit',function(event){
event.preventDefault();
        const Name=fullNameInput.value;
        const Email=emailInput.value;
        const Mobile=mobileInput.value;
        const Password=passwordInput.value;
        const ConfirmPassword=confirmInput.value;

    if(!Name){
        fullNameInput.classList.add('error');
        const formControl=fullNameInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('error');
        messageEl.classList.remove('correct');
    }
    else{
        fullNameInput.classList.add('correct-1');
        const formControl=fullNameInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('correct');
        messageEl.classList.remove('error');
        fullNameInput.classList.remove('error');
    }
    if(!Email){
        emailInput.classList.add('error');
        const formControl=emailInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('error');
        messageEl.classList.remove('correct');
    }
    else{
        emailInput.classList.add('correct-1');
        const formControl=emailInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('correct');
        messageEl.classList.remove('error');
        emailInput.classList.remove('error');
    }
    if(!Mobile){
        mobileInput.classList.add('error');
        const formControl=mobileInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('error');
        messageEl.classList.remove('correct');
    }
    else{
        mobileInput.classList.add('correct-1');
        const formControl=mobileInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('correct');
        messageEl.classList.remove('error');
        mobileInput.classList.remove('error');
    }
    if(!Password){
        passwordInput.classList.add('error');
        const formControl=passwordInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('error');
        messageEl.classList.remove('correct');
    }
    else{
        passwordInput.classList.add('correct-1');
        const formControl=passwordInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('correct');
        messageEl.classList.remove('error');
        passwordInput.classList.remove('error');
    }
    if(!ConfirmPassword){
        confirmInput.classList.add('error');
        const formControl=confirmInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('error');
        messageEl.classList.remove('correct');
    }
    else{
        confirmInput.classList.add('correct-1');
        const formControl=confirmInput.parentElement;
        const messageEl=formControl.querySelector('.form-label');
        messageEl.classList.add('correct');
        messageEl.classList.remove('error');
        confirmInput.classList.remove('error');
    }
});