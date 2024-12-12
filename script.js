//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const formulario = document.getElementById('contacto__formulario');
const nombreInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const mensajeTexArea = document.getElementById('message');
const mensajeErrorName = document.getElementById('errorMessageName');
const mensajeErrorEmail = document.getElementById('errorMessageEmail');
const mensajeErrorSubject = document.getElementById('errorMessageSubject');
const mensajeErrorMessage = document.getElementById('errorMessageMessage');
const submitBtnEnviarMsn = document.getElementById("btn_enviar_msn");
const openCv = document.getElementById('curriculo');
const BtnVerRepositorio = document.querySelector(".boton_respositorio");

/*------------------------------ Visualizar PDF en una pestaña nueva ---------------------------------*/

openCv.addEventListener('click', () => {
    const pdfUrl = 'assets/cv.pdf';
    window.open(pdfUrl, '_blank');
});

/*------------------------------ Ver Respositorio ---------------------------------*/

BtnVerRepositorio.addEventListener('click', () => {
    const pdfUrl = 'https://github.com/Liliana-Torres/bootcamp-crypto-callenge-1';
    window.open(pdfUrl, '_blank');
});


function verificarCamposLlenos() {
    const nombre = nombreInput.value.trim();
    const correo = emailInput.value.trim();
    const asunto = subjectInput.value.trim();
    const mensaje = mensajeTexArea.value.trim();

    if (nombre !== "" && correo !== "" && asunto !== "" && mensaje !== "") {
        submitBtnEnviarMsn.disabled = false;
    } else {
        submitBtnEnviarMsn.disabled = true;
    }
}

function validarFormulario(event) {
    event.preventDefault();

    let isValid = true;

    /*------------------------------ Validar Nombre ---------------------------------*/

    const nombre = nombreInput.value.trim();
    if (nombre === "" || nombre.length < 4 || nombre.length > 50) {
        mensajeErrorName.textContent = "El nombre debe tener entre 4 y 50 caracteres.";
        mensajeErrorName.style.display = "block";
        isValid = false;
    } else {
        mensajeErrorName.style.display = "none";
    }

    /*------------------------------ Validar Correo ---------------------------------*/

    const correo = emailInput.value.trim();
    if (correo === "" || !regexCorreo.test(correo)) {
        mensajeErrorEmail.textContent = "Por favor, ingresa un correo electrónico válido.";
        mensajeErrorEmail.style.display = "block";
        isValid = false;
    } else {
        mensajeErrorEmail.style.display = "none";
    }

    /*------------------------------ Validar Asunto ---------------------------------*/

    const asunto = subjectInput.value.trim();
    if (asunto === "" || asunto.length < 2 || asunto.length > 50) {
        mensajeErrorSubject.textContent = "El asunto no debe estar vacío y debe tener un máximo de 50 caracteres.";
        mensajeErrorSubject.style.display = "block";
        isValid = false;
    } else {
        mensajeErrorSubject.style.display = "none";
    }

    /*------------------------------ Validar Mensaje ---------------------------------*/

    const mensaje = mensajeTexArea.value.trim();
    if (mensaje === "" || mensaje.length < 2 || mensaje.length > 300) {
        mensajeErrorMessage.textContent = "El mensaje no debe estar vacío y debe tener un máximo de 300 caracteres.";
        mensajeErrorMessage.style.display = "block";
        isValid = false;
    } else {
        mensajeErrorMessage.style.display = "none";
    }

    /*------------------------------ Si se cumplen las condiciones anteriores, enviar el formulario---------------------------------*/

    if (isValid) {
        formulario.submit();
    }
}

formulario.addEventListener('submit', validarFormulario);

formulario.addEventListener('input', function () {
    verificarCamposLlenos();
});

verificarCamposLlenos();

