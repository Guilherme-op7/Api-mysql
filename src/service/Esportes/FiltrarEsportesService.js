import { FiltrarEsportes } from "../../repository/EsportesRepository.js";

export default async function FIltrarEsportesService(nome) {
    let resultados = await FiltrarEsportes(nome)

    return resultados
}