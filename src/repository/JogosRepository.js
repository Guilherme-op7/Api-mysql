import connection from "../connection.js";

export async function ListarJogos() {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM jogos_video_game`
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao listar todos os jogos' + err)
        throw err
    }
}

export async function ListarJogosID(id) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM jogos_video_game
                WHERE id = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao listar o ID do jogo' + err)
        throw err
    }
}

export async function FiltrarJogos(nome) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM jogos_video_game
                WHERE titulo like ?`, [`%${nome}%`]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao filtrar todos os jogos' + err)
        throw err
    }
}

export async function CriarJogo(jogos) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO jogos_video_game (titulo, genero, plataforma, data_lancamento, preco, classificacao_etaria, desenvolvedora)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [jogos.titulo, jogos.genero, jogos.plataforma, jogos.data_lancamento, jogos.preco, jogos.classificacao_etaria, jogos.desenvolvedora]
            )

        let idJogo = resultados.insertId
        return idJogo
    }

    catch (err) {
        console.error('Erro ao criar novo jogo!' + err)
        throw err
    }
}

export async function AtualizarJogoID(NovosDados, id) {
    try {
        let [resultados] =
            await connection.query(
                `UPDATE jogos_video_game 
                SET titulo = ?, 
                genero = ?,
                plataforma = ?,
                data_lancamento = ?,
                preco = ?,
                classificacao_etaria = ?,
                desenvolvedora = ?
                WHERE id = ?`,
                [NovosDados.titulo, NovosDados.genero, NovosDados.plataforma, NovosDados.data_lancamento, NovosDados.preco, NovosDados.classificacao_etaria, NovosDados.desenvolvedora, id]
            )

        let idJogo = resultados.id
        return idJogo
    }

    catch (err) {
        console.error('Erro ao Atualizar o jogo!' + err)
        throw err
    }
}

export async function DeletarJogoID(id) {
    try {
        let [resultados] =
            await connection.query(
                `DELETE FROM jogos_video_game
                WHERE id = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao deletar o jogo!' + err)
        throw err
    }
}