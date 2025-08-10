import { FiltrarAnimes } from "../../repository/animesRepository.js";

export default async function FiltrarAnimesService(nome) {
    const Resultados = await FiltrarAnimes(nome)

    return Resultados
}