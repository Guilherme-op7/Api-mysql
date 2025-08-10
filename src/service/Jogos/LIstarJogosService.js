import { ListarJogos } from "../../repository/JogosRepository.js";


export default async function ListarJogosService() {
    let resultados = 
        await ListarJogos()

    return resultados
}