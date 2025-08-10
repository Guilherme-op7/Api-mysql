import { DeletarCarrosID } from "../../repository/CarrosRepository.js";

export default async function DeletarCarrosIDService(id) {
    let resultados = await DeletarCarrosID(id)

    return resultados
}