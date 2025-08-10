import { ListarPizzasID } from "../../repository/PizzasRepository.js";

export default async function ListarPizzasIDService(id) {
    let resultados = await ListarPizzasID(id)

    return resultados
}