import { AtualizarPacienteID } from "../../repository/PacientesRepository.js";

export default async function AtualizarPacienteIDService(NovosDados, id) {
    let resultados = AtualizarPacienteID(NovosDados, id)

    return resultados
}