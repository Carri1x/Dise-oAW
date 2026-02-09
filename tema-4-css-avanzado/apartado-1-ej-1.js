"use strict";

window.onload = () => {
    const inputRow = document.getElementsByName('gridRowGap')[0];
    const inputColum = document.getElementsByName('gridColumnGap')[0];
    const spanRow = document.getElementById('spangridRowGap');
    const spanColumn = document.getElementById('spangridColumnGap');
    const cuadricula = document.getElementById('cuadricula');

    inputRow.value = 1;
    inputColum.value = 1;
    spanRow.textContent = 1;
    spanColumn.textContent = 1;

    inputRow.addEventListener("input",(evento) => {
        const valorCambiado = evento.target.value;
        const spanInputRow = evento.target.previousElementSibling.firstElementChild;
        spanInputRow.textContent = valorCambiado;
        spanRow.textContent = valorCambiado;
        cuadricula.style.rowGap = `${valorCambiado}px`;
    });
    inputColum.addEventListener("input",(evento) => {
        const valorCambiado = evento.target.value;
        const spanInputColumn = evento.target.previousElementSibling.firstElementChild;
        spanInputColumn.textContent = valorCambiado;
        spanColumn.textContent = valorCambiado;
        cuadricula.style.columnGap = `${valorCambiado}px`;
    });
} //Fin del window onload()