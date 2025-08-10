import { FiltrarEstados } from "../../repository/EstadosRepository.js";

export default async function FiltrarEstadosService(nome) {
    let resultados = await FiltrarEstados(nome)
    
    return resultados
}