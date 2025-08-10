import { CriarJogo } from "../../repository/JogosRepository.js";

export default async function CriarJogoServices(jogo) {
    let resultados = await CriarJogo(jogo)
    
    return resultados
}