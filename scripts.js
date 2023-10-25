const diaInput = document.querySelector('input[name="dia"]');
const mesInput = document.querySelector('input[name="mes"]');
const anioInput = document.querySelector('input[name="anio"]');

const digitosAnios = document.querySelector('.digitos-anios');
const digitosMeses = document.querySelector('.digitos-meses');
const digitosDias = document.querySelector('.digitos-dias');

const calcularButton = document.getElementById('calcularButton');

function calcularEdad() {
  
  const dia = parseInt(diaInput.value);
  const mes = parseInt(mesInput.value);
  const anio = parseInt(anioInput.value);

  if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
    
    digitosAnios.textContent = '--';
    digitosMeses.textContent = '--';
    digitosDias.textContent = '--';
    return;
  }

  const fechaIngresada = new Date(anio, mes - 1, dia);

  if (isNaN(fechaIngresada.getTime())) {
    digitosAnios.textContent = '--';
    digitosMeses.textContent = '--';
    digitosDias.textContent = '--';
    return;
  }

  const fechaActual = new Date();

  const diferenciaMilisegundos = fechaActual - fechaIngresada;

  if (diferenciaMilisegundos < 0) {
    digitosAnios.textContent = '--';
    digitosMeses.textContent = '--';
    digitosDias.textContent = '--';
    return;
  }

  const milisegundosEnUnAnio = 1000 * 60 * 60 * 24 * 365.25;
  const milisegundosEnUnMes = milisegundosEnUnAnio / 12;

  const anios = Math.floor(diferenciaMilisegundos / milisegundosEnUnAnio);
  const meses = Math.floor((diferenciaMilisegundos % milisegundosEnUnAnio) / milisegundosEnUnMes);
  const dias = Math.floor((diferenciaMilisegundos % milisegundosEnUnMes) / (1000 * 60 * 60 * 24));

  digitosAnios.textContent = anios;
  digitosMeses.textContent = meses;
  digitosDias.textContent = dias;
}

calcularButton.addEventListener('click', calcularEdad);