document.addEventListener('DOMContentLoaded', async () => {
    // Fetch all users from the server
    const response = await fetch('/api/users');
    const users = await response.json();

    // Get the user list container
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    // Loop through users and create HTML elements for each user
    users.forEach(user => {
        const p = document.createElement('p');
        p.innerHTML = `<a href="profile.html?id=${user.id}">@${user.name}</a> <button onclick="deleteUser(${user.id})">x</button>`;
        userList.appendChild(p);
    });
});

// Function to delete a user
async function deleteUser(id) {
    const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
    if (response.ok) {
        location.reload(); // Reload the page after deleting
    } else {
        alert('Failed to delete user');
    }
}
