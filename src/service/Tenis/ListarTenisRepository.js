import { ListarTenis } from "../../repository/TenisRepository.js";

export default async function ListarTenisService() {
    let resultados = await ListarTenis()

    return resultados;
}