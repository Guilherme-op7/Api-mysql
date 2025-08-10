import { CriarTenis } from "../../repository/TenisRepository.js";

export default async function InserirTenisService(tenis) {
    let resultados = await CriarTenis(tenis)

    return resultados;
}