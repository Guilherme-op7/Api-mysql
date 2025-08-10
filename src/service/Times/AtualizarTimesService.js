import { AtualizarTimeID } from "../../repository/timesRepository.js";

export default async function AtualizarTimeIDService(NovosDados, id) {
    let resultados = await AtualizarTimeID(NovosDados, id)

    return resultados
}