document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        document.getElementById('user-email').textContent = email;
        document.getElementById('thank-you-message').style.display = 'flex';
    } else {
        alert('Please enter a valid email address.');
    }
});

function dismissMessage() {
    document.getElementById('thank-you-message').style.display = 'none';
}
