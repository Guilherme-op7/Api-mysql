import { ListarPacientes } from "../../repository/PacientesRepository.js";

export default async function ListarPacientesService() {
    let resultados = await ListarPacientes()

    return resultados
}