import { AtualizarCarrosID } from "../../repository/CarrosRepository.js";

export default async function AtualizarCarrosIDService(id, carros) {
    let resultados = await AtualizarCarrosID(id, carros);

    return resultados
}