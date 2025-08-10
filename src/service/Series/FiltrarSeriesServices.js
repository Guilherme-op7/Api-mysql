import { FiltrarSerie } from "../../repository/seriesRepository.js";

export default async function FiltrarSerieService(nome) {
    let resposta = await FiltrarSerie(nome);

    return resposta;
}