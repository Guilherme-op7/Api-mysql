import { DeletarEstadoID } from "../../repository/EstadosRepository.js";

export default async function DeletarEstadoIDService(id) {
    let resultados = await DeletarEstadoID(id)

    return resultados
}