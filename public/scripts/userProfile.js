document.addEventListener('DOMContentLoaded', async () => {
    // Get the user ID from the URL
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    // Fetch the user details from the server
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();

    // Get the profile container
    const profile = document.getElementById('profile');
    profile.innerHTML = `
        <h1><b>@${user.name}</b> <a href="edit.html?id=${user.id}"><button>Edit</button></a></h1>
        <p>Nickname: ${user.nickname}</p>
        <p>Age: ${user.age}</p>
        <p>Bio: ${user.bio}</p>
        <p>user_password: ${user.user_password}</p>
    `;
});
