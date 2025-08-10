import { ListarEsportesID } from "../../repository/EsportesRepository.js";

export default async function ListarEsportesIDService(id) {
    let resultados = await ListarEsportesID(id)

    return resultados
}