async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("input[name='post-title']").value;
    const postcontent = document.querySelector("input[name='post-content']").value;

    const resp = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({
            title,
            postcontent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (resp.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert(resp.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);