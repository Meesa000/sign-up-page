
const usernameCharLimit = 1;
const passwordStrongLength = 4;
const signUpBtn = document.getElementById('sign-up-btn').addEventListener('click', onSignUp);

function onSignUp() {
    
    const usernameInput = document.getElementById('username').value;
    const usernameLength = usernameInput.length;
    console.log('username: ' + usernameInput);
    const passwordInput = document.getElementById('password').value;
    console.log('password: ' + passwordInput);
    
    
    if (usernameLength < usernameCharLimit){
        window.alert('Username is lower than the minimum character limit of: ' + usernameCharLimit +'.');
        
    }

    const passStrength = document.getElementById('pass-strength-container');
    if (passwordInput.length > passwordStrongLength){
        passStrength.textContent = 'Password Strength: STRONG';
        passStrength.style.color = 'green';

    }


    // password strength
    

}


