import { CriarEsporte } from "../../repository/EsportesRepository.js";

export default async function CriarEsporteService(esportes) {
    const resultados = await CriarEsporte(esportes)

    return resultados
}