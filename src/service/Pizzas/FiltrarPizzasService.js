import { FiltarPizzas } from "../../repository/PizzasRepository.js";

export default async function FiltarPizzasService(nome) {
    let resultados = await FiltarPizzas(nome)

    return resultados
}