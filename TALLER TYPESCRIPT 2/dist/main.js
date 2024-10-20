import { data } from "./data.js";
let coursesTbody = document.getElementById('series');
renderSeries(data);
function renderSeries(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.nombre}</td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
        coursesTbody.appendChild(trElement);
    });
}
