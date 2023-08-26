const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 
  
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("Заповніть всі поля!");
         return;
    }

    const formValue = {
        email: email.value,
        password: password.value,
    }

    console.log(formValue);
    loginForm.reset();
}
