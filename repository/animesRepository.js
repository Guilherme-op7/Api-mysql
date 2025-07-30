import connection from "../connection.js"

export async function ListarAnimes() {
    try {
        let [resposta] =

            await connection.query(
                `SELECT * FROM animes`
            )

        return resposta;
    }

    catch (err) {
        console.err('Erro ao listar os Animes' + err)
        throw err
    }
}

export async function CriarAnimes(anime) {
    try {
        let [resposta] =
            await connection.query(
                `INSERT INTO animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [anime.nome, anime.genero, anime.episodios, anime.ano_lancamento, anime.estudio, anime.avaliacao]
            );

        return resposta;
    }

    catch (err) {
        console.error('Erro ao criar um novo Anime' + err)
        throw err
    }
}