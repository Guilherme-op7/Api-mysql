import { AtualizarEsporteID } from "../../repository/EsportesRepository.js";

export default async function AtualizarEsporteIDService(NovosDados, id) {
    let resultados = await AtualizarEsporteID(NovosDados, id)

    return resultados
}