import { FiltrarCarros } from "../../repository/CarrosRepository.js";

export default async function FiltrarCarrosService(modelo) {
    let resultados = await FiltrarCarros(modelo)

    return resultados
}