const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const password = document.querySelector('#password-login').ariaValueMax.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();
    const usern = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const pw = document.querySelector('#password-signup').value.trim();

    if (usern && email && pw) {
        const resp = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                usern,
                email,
                pw
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (resp.ok) {
            console.log('Finished!');
        }
        else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);