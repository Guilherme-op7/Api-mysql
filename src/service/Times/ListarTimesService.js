import { ListarTimes } from "../../repository/timesRepository.js";

export default async function ListarTimesService() {
    let resultados = await ListarTimes()

    return resultados
}