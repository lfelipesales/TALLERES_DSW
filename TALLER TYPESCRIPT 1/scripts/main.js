import { data } from "./data.js";
var coursesTbody = document.getElementById('series');
var promedioTemporadas = document.getElementById("promedioTemporadas");
renderSeries(data);
promedioTemporadas.innerHTML = "".concat(getPromedioTemporadas(data).toFixed(2));
function renderSeries(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"#\" class=\"serie-link\">").concat(serie.nombre, "</a></td>\n                           <td>").concat(serie.canal, "</td>\n                           <td>").concat(serie.temporadas, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function getPromedioTemporadas(series) {
    var promedioTemporadas = 0;
    var cont = 0;
    series.forEach(function (serie) { promedioTemporadas = promedioTemporadas + serie.temporadas, cont++; });
    return promedioTemporadas / 6;
}
