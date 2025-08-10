import { CriarSerie } from "../../repository/seriesRepository.js";

export default async function InserirSerieService(serie) {
    let resultados = await CriarSerie(serie)

    return resultados
}