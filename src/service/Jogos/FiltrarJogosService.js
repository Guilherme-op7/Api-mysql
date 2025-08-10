import { FiltrarJogos } from "../../repository/JogosRepository.js";

export default async function FiltrarJogosService(nome) {
    let resposta = await FiltrarJogos(nome)

    return resposta
}