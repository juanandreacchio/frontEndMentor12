const inputDia = document.querySelector('#day-input');
const inputMes = document.querySelector('#month-input');
const inputAnio = document.querySelector('#year-input');
const btnSubmitFecha = document.querySelector('#container-img');
let now = moment();
const yearsText = document.querySelector('#years-text');
const monthsText = document.querySelector('#months-text');
const daysText = document.querySelector('#days-text');
const textoInvalidDate = document.querySelector('#invalid-date');
const textoInvalidDay = document.querySelector('#invalid-day');
const textoInvalidMonth = document.querySelector('#invalid-month');
const textoInvalidYear = document.querySelector('#invalid-year');
const textoEmptyDay = document.querySelector('#empty-day');
const textoEmptyMonth = document.querySelector('#empty-month');
const textoEmptyYear = document.querySelector('#empty-year');
let diaIngresado = inputDia.value;
let mesIngresado = inputMes.value;
let anioIngresado = inputAnio.value;

btnSubmitFecha.addEventListener('click',() =>{
    diaIngresado = inputDia.value;
    mesIngresado = inputMes.value;
    anioIngresado = inputAnio.value;
    textoInvalidDay.classList.add('none');
    textoInvalidMonth.classList.add('none');
    textoInvalidYear.classList.add('none');
    textoInvalidDate.classList.add('none');
    textoEmptyDay.classList.add('none');
    textoEmptyMonth.classList.add('none');
    textoEmptyYear.classList.add('none');
    console.log(diaIngresado);
    console.log(anioIngresado);
    console.log(mesIngresado);
    yearsText.innerText = "- -";
    monthsText.innerText = "- -";
    daysText.innerText = "- -";
    
    if ((diaIngresado === "") || (mesIngresado === "") || (anioIngresado === "")){
        if(diaIngresado === ""){
            textoEmptyDay.classList.remove('none');
        }
        if(mesIngresado === ""){
            textoEmptyMonth.classList.remove('none');
        }
        if(anioIngresado === ""){
            textoEmptyYear.classList.remove('none');
        }
        console.log('error1');
    }
    else if ((diaIngresado > 31) || (mesIngresado > 12) || (anioIngresado > 2023) || (diaIngresado < 0) || (mesIngresado < 0) || (anioIngresado < 0)){
    if (diaIngresado > 31 || diaIngresado < 0){
        textoInvalidDay.classList.remove('none');
    }
    if (mesIngresado > 12 || mesIngresado < 0){
        textoInvalidMonth.classList.remove('none');
    }
    if (anioIngresado > 2023 || anioIngresado < 0){
        textoInvalidYear.classList.remove('none');
    }
    console.log('error2');
    }
    else if(!(moment(`${mesIngresado}/${diaIngresado}/${anioIngresado}`,'MM/DD/YYYY',true).isValid())){
        textoInvalidDate.classList.remove('none');
        console.log('error3');
    }
    else{
    let fechaIngresada = moment(`${anioIngresado}-${mesIngresado}-${diaIngresado} 00:00:00`);
    console.log(fechaIngresada);
    const resultado = moment.preciseDiff(now,fechaIngresada,true);
    yearsText.innerText = resultado.years;
    monthsText.innerText = resultado.months;
    daysText.innerText = resultado.days;
    }
})




