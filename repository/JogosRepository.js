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

export async function CriarJogo(jogos) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO jogos_video_game (titulo, genero, plataforma, data_lancamento, preco, classificacao_etaria, desenvolvedora)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [jogos.titulo, jogos.genero, jogos.plataforma, jogos.data_lancamento, jogos.preco, jogos.classificacao_etaria, jogos.desenvolvedora]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao criar novo jogo!' + err)
        throw err
    }
}