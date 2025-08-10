import { ListarSeriesID } from "../../repository/seriesRepository.js";

export default async function ListarSeriesIDService(id) {
    let respostas = await ListarSeriesID(id)

    return respostas
}