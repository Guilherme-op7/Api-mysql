import { ListarEstados } from "../../repository/EstadosRepository.js";

export default async function ListarEstadosServices() {
    let resultados = 
        await ListarEstados()

    return resultados
}