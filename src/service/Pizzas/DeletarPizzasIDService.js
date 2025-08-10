import { DeletarPizzaID } from "../../repository/PizzasRepository.js"

export default async function DeletarPizzaIDService(id) {
    let resultados = await DeletarPizzaID(id)

    return resultados
}
