import { AtualizarTenisID } from "../../repository/TenisRepository.js";

export default async function AtualizarTenisIDService(Dados, id) {
    let resultados = await AtualizarTenisID(Dados, id)

    return resultados
}