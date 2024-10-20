import { data } from "./data.js";
import { serie } from "./serie.js";

let coursesTbody: HTMLElement = document.getElementById('series')!;
let promedioTemporadas: HTMLElement = document.getElementById("promedioTemporadas")!;

renderSeries(data)
promedioTemporadas.innerHTML = `${getPromedioTemporadas(data).toFixed(2)}`

function renderSeries(series: serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" class="serie-link">${serie.nombre}</a></td>
                           <td>${serie.canal}</td>
                           <td>${serie.temporadas}</td>`;
    coursesTbody.appendChild(trElement);
  });

}

function getPromedioTemporadas(series: serie[]): number {
  let promedioTemporadas: number = 0;
  let cont: number = 0;
  series.forEach((serie) => {promedioTemporadas = promedioTemporadas + serie.temporadas, cont ++});
  return promedioTemporadas/6;
}