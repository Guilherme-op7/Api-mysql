import { DeletarTimeID } from "../../repository/timesRepository.js";

export default async function DeletarTimeIDService(id) {
    let resultados = await DeletarTimeID(id)

    return resultados
}