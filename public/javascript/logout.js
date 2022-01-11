const { response } = require("express")

async function logout() {
    const resp = await fetch('/api/users/logout', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(resp.ok) {
        document.location.replace('/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);