import { CriarTime } from "../../repository/timesRepository.js";

export default async function InserirTimeService(time) {
    let resultados = await CriarTime(time)

    return resultados
}