import { AtualizarEstadoID } from "../../repository/EstadosRepository.js";

export default async function AtualizarEstadoIDService(estado, id) {
    let resultados = await AtualizarEstadoID(estado, id)

    return resultados
}