import { CriarPizzas } from "../../repository/PizzasRepository.js";

export default async function CriarPizzasService(pizzas) {
    let resultados = 
        await CriarPizzas(pizzas)

    return resultados
}