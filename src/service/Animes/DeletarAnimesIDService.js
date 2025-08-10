import { DeletarAnimeID } from "../../repository/animesRepository.js";

export default async function DeletarAnimeIDService(id) {
    let Resultados = await DeletarAnimeID(id)

    return Resultados
}