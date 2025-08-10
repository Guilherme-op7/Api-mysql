import { ListarJogosID } from "../../repository/JogosRepository.js";

export default async function ListarJogosIDService(id) {
    let resposta = await ListarJogosID(id)

    return resposta
}