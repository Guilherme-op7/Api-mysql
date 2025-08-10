import { DeletarSerieID } from "../../repository/seriesRepository.js";

export default async function DeletarSerieIDService(id) {
    let resultados = await DeletarSerieID(id)

    return resultados
}