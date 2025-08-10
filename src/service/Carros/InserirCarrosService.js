import { CriarCarros } from '../../repository/CarrosRepository.js'

export default async function InserirCarrosService(carros, NovosDados) {
    const resposta = await CriarCarros(carros, NovosDados)

    return resposta
}