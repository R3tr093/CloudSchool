window.addEventListener('DOMContentLoaded', (event) => {
    
    const logInBtn = document.getElementsByClassName('logInBtn');
    const registerBtn = document.getElementsByClassName("registerBtn");
    const register = document.getElementById('register');
    const logIn = document.getElementById('logIn')
    const question = document.getElementById("question");
    const info = document.getElementById('info');
    const title = document.getElementById('title');

    logInBtn[0].addEventListener('click',function(){

        register.style.display = "none";
        logIn.style.display = "block";
    });

    registerBtn[0].addEventListener('click',function(){

        register.style.display = "block";
        logIn.style.display = "none";
        register.classList.remove('slideInDown');
        register.classList.add('rotateIn');
    });

    logInBtn[1].addEventListener('click',function(){

        info.style.display = "none";
        register.style.display = "none";
        logIn.style.display = "block";
        title.style.display = "block";
    });

    registerBtn[1].addEventListener('click',function(){

        register.style.display = "block";
        info.style.display = "none";
        logIn.style.display = "none";
        register.classList.remove('slideInDown');
        register.classList.add('rotateIn');
        title.style.display = "block";
    });

    question.addEventListener('click',function(){
        register.style.display = "none";
        logIn.style.display = "none";
        title.style.display = "none";
        info.classList.add('rollIn');
        info.classList.add('animated');
        info.style.display = "block";
        
    })


});