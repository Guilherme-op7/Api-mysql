import { AtualizarJogoID } from "../../repository/JogosRepository.js";

export default async function AtualizarJogoIDService(NovosDados, id) {
    let resultados = await AtualizarJogoID(NovosDados, id)

    return resultados
}