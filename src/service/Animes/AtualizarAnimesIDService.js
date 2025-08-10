import { AtualizarAnimesID } from "../../repository/animesRepository.js";

export default async function AtualizarAnimesIDService(id, NovosDados) {
    let resultados = await AtualizarAnimesID(id, NovosDados)

    return resultados
}