import {ListarCarros}  from '../../repository/CarrosRepository.js'

export default async function ListarCarrosService() {
    try {
        const resposta = await ListarCarros();
        return resposta;
    } catch (err) {
        console.error('Erro ao listar os Carros:', err);
        throw err;
    }
}