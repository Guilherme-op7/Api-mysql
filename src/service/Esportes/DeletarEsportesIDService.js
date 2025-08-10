import { DeletarEsportesID } from "../../repository/EsportesRepository.js";

export default async function DeletarEsportesIDService(id) {
    let resultados = await DeletarEsportesID(id)

    return resultados
}