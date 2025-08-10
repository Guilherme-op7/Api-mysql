import { CriarPaciente } from "../../repository/PacientesRepository.js";

export default async function CriarPacienteService(paciente) {
    let resultado = 
        await CriarPaciente(paciente)

    return resultado
}