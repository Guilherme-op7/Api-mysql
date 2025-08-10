import { ListarPizzas } from "../../repository/PizzasRepository.js";

export default async function ListarPizzasService() {
    let resultados = 
        await ListarPizzas()

    return resultados
}