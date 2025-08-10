import { AtualizarPizzasID } from "../../repository/PizzasRepository.js";

export default async function AtualizarPizzasIDService(NovosDados, id) {
    let resultados = await AtualizarPizzasID(NovosDados, id);

    return resultados
}