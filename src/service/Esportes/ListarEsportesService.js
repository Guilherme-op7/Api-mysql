import { ListarEsportes } from '../../repository/EsportesRepository.js'

export default async function ListarEsportesServices() {
    const resposta = 
        await ListarEsportes()

    return resposta
}