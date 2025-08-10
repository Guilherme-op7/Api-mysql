import { ListarPacientesID } from "../../repository/PacientesRepository.js";

export default async function ListarPacientesIDService(id) {
    let resultados = await ListarPacientesID(id)

    return resultados
}