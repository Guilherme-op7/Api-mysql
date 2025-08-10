import { DeletarJogoID } from "../../repository/JogosRepository.js";

export default async function DeletarJogoIDService(id) {
    let resultado = await DeletarJogoID(id)

    return resultado
}