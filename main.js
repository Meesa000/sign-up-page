
const usernameCharLimit = 3;
const signUpBtn = document.getElementById('sign-up-btn').addEventListener('click', onSignUp);

function onSignUp() {
    const usernameInput = document.getElementById('username').value;
    const usernameLength = usernameInput.length;
    console.log(usernameInput);
    const passwordInput = document.getElementById('password').value;
    console.log(passwordInput);
    

    if (usernameLength >= 3){
        window.alert('Username exceeds the character limit of: ' + usernameCharLimit +'.');
    }

}


