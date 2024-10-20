import { data } from "./data.js";
import { serie } from "./serie.js";

let coursesTbody: HTMLElement = document.getElementById('series')!;
let promedioTemporadas: HTMLElement = document.getElementById("promedioTemporadas")!;
let Card: HTMLElement = document.getElementById("Card")!;
let Imagen: HTMLImageElement = document.getElementById("ImagenSerie") as HTMLImageElement;
let Nombre: HTMLElement = document.getElementById("NombreSerie")!;
let Descripcion: HTMLElement = document.getElementById("DescripcionSerie")!;
let URL: HTMLAnchorElement = document.getElementById("URLserie")! as HTMLAnchorElement;

renderSeries(data)
promedioTemporadas.innerHTML = `${getPromedioTemporadas(data).toFixed(2)}`

function renderSeries(series: serie[]): void {
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
          const IdSerie = parseInt(link.getAttribute('data-id')!);
          const SerieActual = series.find(s => s.id === IdSerie);
          if (SerieActual) {
              mostrarDetallesSerie(SerieActual);
          }
      });
  });
}

function mostrarDetallesSerie(serie: serie): void {
  Imagen.src = serie.imagen;
  Nombre.innerText = serie.nombre;
  Descripcion.innerText = serie.descripcion;
  URL.href = serie.URLserie;
  URL.innerText = serie.URLserie;
  Card.style.display = "block";
}

function getPromedioTemporadas(series: serie[]): number {
  let promedioTemporadas: number = 0;
  let cont: number = 0;
  series.forEach((serie) => {promedioTemporadas = promedioTemporadas + serie.temporadas, cont ++});
  return promedioTemporadas/6;
}