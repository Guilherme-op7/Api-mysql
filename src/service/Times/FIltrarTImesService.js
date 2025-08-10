import { FiltrarTimes } from "../../repository/timesRepository.js";

export default async function FiltrarTimesServices(nome) {
    let resultados = await FiltrarTimes(nome)

    return resultados
}