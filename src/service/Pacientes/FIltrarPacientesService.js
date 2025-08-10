import { FiltrarPacientes } from "../../repository/PacientesRepository.js";

export default async function FiltrarPacientesService(nome) {
    let resultados = await FiltrarPacientes(nome)

    return resultados
}