const codes = document.querySelectorAll('.code');
const codeInput = document.querySelector('.code-container');
const loader = document.querySelector('.loader');
const authContainer = document.querySelector('.container')

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        const input = e.target;
        const inputValue = input.value;

        if (inputValue.length > 1) { //Asegura que no haya mas 1 digito ene l input.
            input.value = inputValue.slice(0, 1);
        }

        if (inputValue.length === 1) { 
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        }

        if (idx === codes.length - 1 && e.target.value.length === 1) {
            const enteredCode = Array.from(codes).map(code => code.value).join('');
            if (enteredCode === '4132') {
                loader.style.display = 'block'; // Mostrar el loader
                authContainer.style.display = 'none'; //Oculta el div auth

                setTimeout(() => {
                    // Simular carga por 2 segundos
                    loader.style.display = 'none'; // Ocultar el loader
                    authContainer.style.display = 'block'; //Muestra el div auth
                    codes.forEach(code => code.value = '');
                    codes[0].focus();
                }, 3500);
            }
        }
    });
});
