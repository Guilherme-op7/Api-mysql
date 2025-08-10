

import connection from '../connection.js';

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

export async function ListarAnimesID(Id) {
    try {
        let [resposta] =

            await connection.query(
                `SELECT * FROM animes
                WHERE id = ?`, [Id]
            )

        return resposta
    }
    catch (err) {
        console.error('Erro ao listar animes por id' + err)
        throw err
    }
}

export async function FiltrarAnimes(nome) {
    try {
        let [resposta] =
            await connection.query(
                `SELECT * FROM animes
                WHERE nome like ?`, [`%${nome}%`]
            )

        return resposta
    }

    catch (err) {
        console.error('Erro ao filtrar os animes!')
    }
}

export async function CriarAnimes(anime) {
    try {
        let [resposta] =
            await connection.query(
                `INSERT INTO animes (nome, genero, episodios, ano_lancamento, 
                estudio, avaliacao) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [anime.nome, anime.genero, anime.episodios, anime.ano_lancamento, anime.estudio, anime.avaliacao]
            );

        let idJogo = resposta.insertId
        return idJogo
    }

    catch (err) {
        console.error('Erro ao criar um novo Anime' + err)
        throw err
    }
}

export async function AtualizarAnimesID(id, NovosDados) {
    try {
        let [resposta] =
            await connection.query(
                `UPDATE animes
            SET nome = ?, 
            genero = ?,
            episodios = ?, 
            ano_lancamento = ?,
            estudio = ?, 
            avaliacao = ?
            WHERE id = ?`,
                [NovosDados.nome, NovosDados.genero, NovosDados.episodios, NovosDados.ano_lancamento, NovosDados.estudio, NovosDados.avaliacao, id]
            )

        return resposta.id
    }

    catch (err) {
        console.error('Erro ao atualizar os animes!' + err)
        throw err

    }
}

export async function DeletarAnimeID(id) {
    try {
        let [resposta] =
            await connection.query(
                `DELETE FROM animes
            WHERE id = ?`,
                [id]
            )
        return resposta
    }

    catch (err) {
        console.error('Erro ao deletar os animes!' + err)
        throw err

    }
}