import { ListarAnimes } from '../../repository/animesRepository.js';

export default async function ListarAnimesService() {
    try {
        const resposta = await ListarAnimes();
        return resposta;
    } catch (err) {
        console.error('Erro ao listar os Animes:', err);
        throw err;
    }
}