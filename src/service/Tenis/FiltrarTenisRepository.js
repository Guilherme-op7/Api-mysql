import { Filtrartenis } from "../../repository/TenisRepository.js";

export default async function FiltrarTenisService(id) {
    let resultados = await Filtrartenis(id)

    return resultados;
}