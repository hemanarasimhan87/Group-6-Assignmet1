document.addEventListener('DOMContentLoaded', async () => {
    // Get the user ID from the URL
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    // Fetch the user details from the server
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();

    // Populate the form with the existing user data
    document.getElementById('name').value = user.name;
    document.getElementById('nickname').value = user.nickname;
    document.getElementById('age').value = user.age;
    document.getElementById('bio').value = user.bio;
    document.getElementById('user_password').value = user.user_password;

    // Handle form submission for updating user data
    document.getElementById('editForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const updatedUser = {
            name: document.getElementById('name').value,
            nickname: document.getElementById('nickname').value,
            age: document.getElementById('age').value,
            bio: document.getElementById('bio').value,
            user_password: document.getElementById('user_password').value
        };

        // Send the updated user data to the server
        const response = await fetch(`/api/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        });

        // Redirect to the profile page if the update is successful
        if (response.ok) {
            window.location.href = `profile.html?id=${userId}`;
        } else {
            alert('Failed to update user');
        }
    });
});
