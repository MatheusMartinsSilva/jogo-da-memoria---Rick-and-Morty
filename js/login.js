const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
        return;
    }

    button.setAttribute('disabled', '')
}

const handleSubmit = () => {
    event.preventDefault();

    localStorage.setItem('Jogador', input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);