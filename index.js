document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const message = document.getElementById('message');
    
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            message.textContent = data.message;
        } catch (error) {
            console.error('Error:', error);
        }
    });
    
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            message.textContent = data.message;
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
