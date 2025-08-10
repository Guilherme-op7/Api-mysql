import { ListarSeries } from "../../repository/seriesRepository.js"

export default async function ListarSeriesService() {
    let resultados = await ListarSeries()

    return resultados
}