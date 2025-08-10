import { DeletarPacientesID } from "../../repository/PacientesRepository.js";

export default async function DeletarPacientesIDServices(id) {
    let resultados = await DeletarPacientesID(id)

    return resultados
}