// Handle form submission for creating a new user
document.getElementById('createForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const newUser = {
        name: document.getElementById('name').value,
        nickname: document.getElementById('nickname').value,
        age: document.getElementById('age').value,
        bio: document.getElementById('bio').value
    };

    // Send the new user data to the server
    const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });

    // Redirect to the index page if the creation is successful
    if (response.ok) {
        window.location.href = 'index.html';
    } else {
        alert('Failed to create user');
    }
});
