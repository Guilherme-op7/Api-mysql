import { AtualizarSerieID } from "../../repository/seriesRepository.js";

export default async function AtualizarSerieIDService(NovosDados, id) {
    let resultados = await AtualizarSerieID(NovosDados, id)

    return resultados
}