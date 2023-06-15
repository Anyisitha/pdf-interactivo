/**
 * Pregunta 1.
 * @type {number}
 */
let question1 = 0;

/**
 * Pregunta 2.
 * @type {number}
 */
let question2 = 0;

/**
 * Pregunta 3.
 * @type {number}
 */
let question3 = 0;

/**
 * Pregunta 4.
 * @type {number}
 */
let question4 = 0;

/**
 * Pregunta 5.
 * @type {number}
 */
let question5 = 0;

/**
 * Pregunta 6.
 * @type {number}
 */
let question6 = 0;

/**
 * Pregunta 7.
 * @type {number}
 */
let question7 = 0;

/**
 * Subscore para ciertas preguntas.
 * @type {number}
 */
let subscore = 0;

/**
 * Subscore adicional para otras preguntas.
 * @type {number}
 */
let subscore2 = 0;

/**
 * Arreglo de dimensiones que contiene grupos de IDs de elementos HTML relacionados a preguntas.
 * Cada sub arreglo representa un grupo de preguntas relacionadas.
 * @type {Array<Array<string>>}
 */
const dimensions = [
    ["content-radio1", "content-radio2", "content-radio3", "content-radio4", "content-radio5", "content-radio6"],
    ['content-radio12', "content-radio7", "content-radio8", "content-radio9", "content-radio10", "content-radio11"],
    ["content-radio13", "content-radio14", "content-radio15", "content-radio16", "content-radio17", "content-radio18"],
    ["content-radio20", "content-radio21", "content-radio22", "content-radio23", "content-radio25", "content-radio26"],
    ["content-radio27", "content-radio28", "content-radio29", "content-radio30", "content-radio31", "content-radio32"],
    ["content-radio33", "content-radio34", "content-radio35", "content-radio36", "content-radio37", "content-radio38"],
    ["content-radio39", "content-radio40", "content-radio41", "content-radio42", "content-radio43", "content-radio44"],
    ["content-radio45", "content-radio46", "content-radio47", "content-radio48", "content-radio49", "content-radio50", "content-radio51"]
]

/**
 * Oculta el contenido especificado por el índice en el arreglo de dimensiones.
 * @param {number} index - El índice del arreglo de dimensiones que indica qué contenido se debe ocultar.
 * @returns {void}
 */
const disableContent = (index) => {
    dimensions[index].map((item) => {
        document.getElementById(item).style.display = "none";
    })
}

/**
 * Calcula y muestra los puntajes obtenidos con base en las respuestas de las preguntas.
 * @returns {void}
 */
const getScores = () => {
    subscore = question1 + question2 + question3;
    subscore2 = question4 + question5 + question6 + question7;
    let total = subscore + subscore2;
    document.getElementById('score-content-ipss-1').innerText = subscore.toString();
    document.getElementById('score-content-subscore').innerText = subscore2.toString();
    document.getElementById('score-content-ipss').innerText = total.toString();
}

/**
 * Asigna un valor a una pregunta específica y realiza acciones adicionales según la pregunta.
 * @param {*} value - El valor a asignar a la pregunta.
 * @param {number} question - El número de la pregunta.
 * @param {string} id - El ID del elemento HTML relacionado con la pregunta.
 * @returns {void}
 */
const setValue = (value, question, id) => {
    switch (question) {
        case 1:
            question1 = value;
            disableContent(0);
            break;
        case 2:
            question2 = value;
            disableContent(1);
            break;
        case 3:
            question3 = value;
            disableContent(2);
            break;
        case 4:
            question4 = value;
            disableContent(3);
            break;
        case 5:
            question5 = value;
            disableContent(4);
            break;
        case 6:
            question6 = value;
            disableContent(5);
            break;
        case 7:
            question7 = value;
            disableContent(6);
            break;
    }
    document.getElementById(id).style.display = "inline-block";
    getScores();
}

/**
 * Establece las calificaciones y realiza acciones adicionales según el ID proporcionado.
 * @param {string} id - El ID del elemento HTML relacionado a las calificaciones.
 * @returns {void}
 */
const setQualifications = (id) => {
    disableContent(7);
    document.getElementById(id).style.display = "inline-block";
}