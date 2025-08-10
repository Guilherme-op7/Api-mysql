import { ListarCarrosID } from "../../repository/CarrosRepository.js";

export default async function ListarCarrosIDService(id) {
    let resultados = ListarCarrosID(id)

    return resultados
}