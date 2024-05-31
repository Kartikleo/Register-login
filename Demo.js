document.getElementById('ks').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email === 'kartiksangwan053@gmail.com' && password === 'password123') {
        alert('Login Successful');
    } 

   
        else {
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.style.display = 'block';
        }
   
});
