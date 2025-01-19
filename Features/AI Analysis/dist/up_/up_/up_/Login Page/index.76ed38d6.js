const signInButton = document.querySelector('.login .inputBx input[type="submit"]');
const signUpButton = document.querySelector('#signupSubmit');
const forgotPasswordButton = document.querySelector('#forgotPasswordSubmit');
const signUpLink = document.querySelector('#signUpLink');
const loginLink = document.querySelector('#loginLink');
const forgotPasswordLink = document.querySelector('#forgotPasswordLink');
const backToLoginLink = document.querySelector('#backToLoginLink');
const usernameInput = document.querySelector('.login .inputBx input[placeholder="Username"]');
const passwordInput = document.querySelector('.login .inputBx input[placeholder="Password"]');
const errorMessage = document.querySelector('.login .error-message');
const signupUsername = document.querySelector('#signupUsername');
const signupEmail = document.querySelector('#signupEmail');
const signupPassword = document.querySelector('#signupPassword');
const signupConfirmPassword = document.querySelector('#signupConfirmPassword');
const signupError = document.querySelector('#signupError');
const forgotEmail = document.querySelector('#forgotEmail');
const forgotPasswordError = document.querySelector('#forgotPasswordError');
const loginForm = document.querySelector('#loginForm');
const signUpForm = document.querySelector('#signUpForm');
const forgotPasswordForm = document.querySelector('#forgotPasswordForm');
// Toggle between login, sign-up, and forgot password forms
signUpLink.addEventListener('click', ()=>{
    loginForm.style.display = 'none';
    signUpForm.style.display = 'flex';
});
loginLink.addEventListener('click', ()=>{
    signUpForm.style.display = 'none';
    loginForm.style.display = 'flex';
});
forgotPasswordLink.addEventListener('click', ()=>{
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'flex';
});
backToLoginLink.addEventListener('click', ()=>{
    forgotPasswordForm.style.display = 'none';
    loginForm.style.display = 'flex';
});
// Function to display error messages
const showError = (message)=>{
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
};
// Function to hide error messages
const hideError = ()=>{
    errorMessage.style.display = 'none';
};
// Function to validate forgot password email
const validateForgotPassword = ()=>{
    const email = forgotEmail.value.trim();
    if (email === '') {
        forgotPasswordError.textContent = 'Please enter your email address.';
        forgotPasswordError.style.display = 'block';
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        forgotPasswordError.textContent = 'Please enter a valid email address.';
        forgotPasswordError.style.display = 'block';
        return false;
    }
    forgotPasswordError.style.display = 'none';
    return true;
};
// Forgot password submit event
forgotPasswordButton.addEventListener('click', (e)=>{
    e.preventDefault(); // Prevent form submission
    if (!validateForgotPassword()) return; // Validate email
    // Simulate sending the reset email
    forgotPasswordButton.disabled = true;
    forgotPasswordButton.value = 'Sending Reset Link...';
    setTimeout(()=>{
        forgotPasswordButton.disabled = false;
        forgotPasswordButton.value = 'Send Reset Link';
        alert('Password reset link sent to your email!');
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'flex';
    }, 2000); // Simulate a delay (2 seconds)
});
// Sign-in button click event
signInButton.addEventListener('click', ()=>{
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (username === '' || password === '') showError('Please fill in both fields.');
    else {
        hideError();
        alert('Login successful!');
    }
});
// Sign-up submit button click event
signUpButton.addEventListener('click', ()=>{
    const username = signupUsername.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();
    const confirmPassword = signupConfirmPassword.value.trim();
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        signupError.textContent = 'Please fill in all fields.';
        signupError.style.display = 'block';
        return;
    }
    if (password !== confirmPassword) {
        signupError.textContent = 'Passwords do not match.';
        signupError.style.display = 'block';
        return;
    }
    signupError.style.display = 'none';
    alert('Account created successfully!');
    signUpForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

//# sourceMappingURL=index.76ed38d6.js.map
