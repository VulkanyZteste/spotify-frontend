cancelSubmit();
function cancelSubmit() {
    document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
}



function btnLogin() {
    const inputEmail = document.querySelector('#input-email').value;
    const inputPassword = document.querySelector('#input-password').value;


    let body = {
        email: inputEmail,
        password: inputPassword
    }


    axios.post('https://api-spotifybackend.herokuapp.com/logged', body)
        .then(response => {
            if (response.data === 'empty field') {
                showError();
            };


            if (response.data === 'password is wrong') {
                showError();
            };


            if (response.data === 'no user found') {
                showError();
            };


            if (response.data === 'succesfully logged') {
                console.log('logado');
                console.log(response.data);
                window.location.href = "https://website-spotify.herokuapp.com/logged";
            };
        })
        .catch(error => {
            console.log(error);
        });
};


function showError() {
    const div = document.querySelector('.error');

    if (!div.style.display === 'none') {
        document.querySelector('.error').style.display = 'none';
    } else {
        document.querySelector('.error').style.display = 'flex';

    };
};