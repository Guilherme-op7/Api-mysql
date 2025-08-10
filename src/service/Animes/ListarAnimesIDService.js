import { ListarAnimesID } from "../../repository/animesRepository.js";

export default async function ListarAnimesIDService(id) {
    const Animes = await ListarAnimesID(id)

    return Animes
}