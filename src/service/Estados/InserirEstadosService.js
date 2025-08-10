import { CriarEstado } from "../../repository/EstadosRepository.js";

export default async function CriarEstadosService(esportes) {
    let resultados = 
        await CriarEstado(esportes)

    return resultados
}