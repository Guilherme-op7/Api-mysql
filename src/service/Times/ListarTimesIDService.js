import { ListarTimesID } from "../../repository/timesRepository.js";

export default async function ListarTimesIDService(id) {
    let resultados = await ListarTimesID(id);

    return resultados
}