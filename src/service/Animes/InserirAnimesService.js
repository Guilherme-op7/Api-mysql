import { CriarAnimes } from '../../repository/animesRepository.js'

export default async function InserirAnimesService(anime) {
    const AnimeNovo = await CriarAnimes(anime)

    return AnimeNovo;
}