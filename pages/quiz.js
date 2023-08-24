const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const timerContainer = document.getElementById('timer'); 

let score = 0;
let questions = [];

let timeElapsed = 0;
let timerInterval; 

/* Función para iniciar el temporizador */
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); 
}

/* Función para actualizar el temporizador */
function updateTimer() {
    timeElapsed++;
    document.getElementById('time').textContent = timeElapsed;
}


fetch('preguntas.json')
    .then(response => response.json())
    .then(data => {
        questions = data; 
        createQuiz();
        startTimer(); /* Iniciar el temporizador al cargar las preguntas */
    });

/* Función para crear el quiz */
function createQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'card mt-4 custom-question-container';
        questionDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Pregunta ${index + 1}:</h5>
                <p class="card-text">${question.pregunta}</p>
                ${question.opciones.map((opcion, optionIndex) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question-${index}" id="option-${index}-${optionIndex}" value="${optionIndex}">
                        <label class="form-check-label" for="option-${index}-${optionIndex}">
                            ${opcion}
                        </label>
                    </div>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

/* Calcular resultado al hacer clic en "Enviar Respuestas" */
submitButton.addEventListener('click', () => {
    clearInterval(timerInterval); /* Detener el temporizador al enviar respuestas */
    calculateScore();
    showResults();
});

/* Función para calcular el puntaje */
function calculateScore() {
    const questionDivs = document.querySelectorAll('.card');
    
    questionDivs.forEach((questionDiv, index) => {
        const selectedOption = questionDiv.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            if (selectedValue === questions[index].respuesta) {
                score++;
            }
        }
    });
}

/* Función para mostrar los resultados y el botón "Try Again" */
function showResults() {
    Swal.fire({
        title: 'Resultados del Quiz',
        html: `Tu puntaje es: ${score} de ${questions.length} preguntas<br>¡Inténtalo de nuevo si lo deseas!`,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Try Again',
        cancelButtonText: 'Cerrar'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload(); /* Reiniciar la página para volver a intentar */
        }
    });
}

