import { ListarTenisID } from "../../repository/TenisRepository.js";

export default async function ListarTenisIDService(id) {
    let respostas = await ListarTenisID(id)
    
    return respostas
}