import { DeletarTenisID } from "../../repository/TenisRepository.js";

export default async function DeletarTenisIDService(id) {
    let resultados = await DeletarTenisID(id)

    return resultados
}