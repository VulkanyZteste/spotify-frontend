// Cancel submit
cancelSubmit();
function cancelSubmit() {
    document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
};


// Get terms value
let inputTerms = document.getElementById('terms');
inputTerms.value = 'off';
function validateTerms() {
    if (inputTerms.checked == 1) {
        inputTerms.value = 'on';
    }else {
        inputTerms.value = 'off';
    }
}


function signUp() {
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-password').value;
    const inputProfileName = document.getElementById('input-profile-name').value;
    const inputDay = document.getElementById('day').value;
    const inputMonth = document.getElementById('month').value;
    const inputYear = document.getElementById('year').value;
    let inputGender;

    let flagInputTerms = inputTerms.value;




    // Get radio's values
    function displayRadioValue() {
        var el = document.getElementsByName('gender');

        for (i = 0; i < el.length; i++) {
            if (el[i].checked)
                // console.log(el[i].value);
                inputGender = el[i].value;
        }
    }
    displayRadioValue();


    // Validate the terms
    if (flagInputTerms === 'off') {
        showErrorTerms();
        return;
    }




    // Create body
    var body = {
        email: inputEmail,
        password: inputPassword,
        profileName: inputProfileName,
        dayBirth: inputDay,
        monthBirth: inputMonth,
        yearBirth: inputYear,
        gender: inputGender,
        terms: inputTerms.value
    }


    // Post on /registered
    axios.post('https://api-spotifybackend.herokuapp.com/registered', body)
        .then(response => {
            // console.log(response.status);
            if (response.status === 201) {
                window.location.href = "../logged/logged.html";
            } else {
                // console.log('response.status is not 201');
            }
        })
        .catch(error => {
            console.log(error);
        });
}






















// Errors
function showErrorTerms() {
    const div = document.querySelector('.error-terms');

    if (!div.style.display === 'none') {
        document.querySelector('.error-terms').style.display = 'none';
    } else {
        document.querySelector('.error-terms').style.display = 'flex';
    };
};


function showErrorEmail() {
    const div = document.querySelector('.error-email');

    if (!div.style.display === 'none') {
        document.querySelector('.error-email').style.display = 'none';
    } else {
        document.querySelector('.error-email').style.display = 'flex';


        document.querySelector('#input-email').style.borderColor = '#ff0000';
        document.querySelector('#input-email').style.outlineColor = '#ff0000';
    };
};


function errorEmail() {
    const inputEmail = document.getElementById('input-email').value;
    

    if (inputEmail.length === 0) {
        showErrorEmail();
        // console.log('You need to enter your email.');
    } else {
        document.querySelector('.error-email').style.display = 'none';

        document.querySelector('#input-email').style.borderColor = '#000000';

        document.querySelector('#input-email').style.outlineColor = '#000000';
    };
};


function showErrorEmailConfirm() {
    const div = document.querySelector('.error-confirm-email');

    if (!div.style.display === 'none') {
        document.querySelector('.error-confirm-email').style.display = 'none';
    } else {
        document.querySelector('.error-confirm-email').style.display = 'flex';


        document.querySelector('#input-confirm-email').style.borderColor = '#ff0000';
        document.querySelector('#input-confirm-email').style.outlineColor = '#ff0000';
    };
};


function errorEmailConfirm() {
    const inputEmailConfirm = document.getElementById('input-confirm-email').value;
    

    if (inputEmailConfirm.length === 0) {
        showErrorEmailConfirm();
        // console.log('You need to confirm your email.');
    } else {
        document.querySelector('.error-confirm-email').style.display = 'none';

        document.querySelector('#input-confirm-email').style.borderColor = '#000000';

        document.querySelector('#input-confirm-email').style.outlineColor = '#000000';
    };
}


function showErrorPassword() {
    const div = document.querySelector('.error-password');

    if (!div.style.display === 'none') {
        document.querySelector('.error-password').style.display = 'none';
    } else {
        document.querySelector('.error-password').style.display = 'flex';


        document.querySelector('#input-password').style.borderColor = '#ff0000';
        document.querySelector('#input-password').style.outlineColor = '#ff0000';
    };
};


function errorPassword() {
    const inputPassword = document.getElementById('input-password').value;
    

    if (inputPassword.length === 0) {
        showErrorPassword();
        // console.log('You need to enter your password.');
    } else {
        document.querySelector('.error-password').style.display = 'none';

        document.querySelector('#input-password').style.borderColor = '#000000';

        document.querySelector('#input-password').style.outlineColor = '#000000';
    };
};


function showErrorProfile() {
    const inputProfile = document.getElementById('input-profile-name').value;

    if (inputProfile.length === 0) {
        // console.log('Enter a name for your profile.');

        document.querySelector('#profile-name').innerHTML = 'Enter a name for your profile.';

        document.querySelector('#input-profile-name').style.borderColor = '#ff0000';

        document.querySelector('#input-profile-name').style.outlineColor = '#ff0000';

        document.querySelector('#profile-name').style.color = '#ff0000';
    };


    
};


function errorProfile() {
    showErrorProfile();
};

