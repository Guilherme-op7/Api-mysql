import { ListarEstadosID } from "../../repository/EstadosRepository.js";

export default async function listarEstadoIDService(id) {
    let resultados = await ListarEstadosID(id)

    return resultados
}