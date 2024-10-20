import { data } from "./data.js";
let coursesTbody = document.getElementById('series');
let promedioTemporadas = document.getElementById("promedioTemporadas");
let Card = document.getElementById("Card");
let Imagen = document.getElementById("ImagenSerie");
let Nombre = document.getElementById("NombreSerie");
let Descripcion = document.getElementById("DescripcionSerie");
let URL = document.getElementById("URLserie");
renderSeries(data);
promedioTemporadas.innerHTML = `${getPromedioTemporadas(data).toFixed(2)}`;
function renderSeries(series) {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.nombre}</a></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
        coursesTbody.appendChild(trElement);
    });
    const LinkSeries = document.querySelectorAll('.serie-link');
    LinkSeries.forEach(link => {
        link.addEventListener('click', (event) => {
            const IdSerie = parseInt(link.getAttribute('data-id'));
            const SerieActual = series.find(s => s.id === IdSerie);
            if (SerieActual) {
                mostrarDetallesSerie(SerieActual);
            }
        });
    });
}
function mostrarDetallesSerie(serie) {
    Imagen.src = serie.imagen;
    Nombre.innerText = serie.nombre;
    Descripcion.innerText = serie.descripcion;
    URL.href = serie.URLserie;
    URL.innerText = serie.URLserie;
    Card.style.display = "block";
}
function getPromedioTemporadas(series) {
    let promedioTemporadas = 0;
    let cont = 0;
    series.forEach((serie) => { promedioTemporadas = promedioTemporadas + serie.temporadas, cont++; });
    return promedioTemporadas / 6;
}
