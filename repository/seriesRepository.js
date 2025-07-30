import connection from "../connection.js";

export async function ListarSeries() {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM series`
            )

        return respostas
    }

    catch (err) {
        console.error('Erro ao listar todas as series' + err)
        throw err
    }
}

export async function CriarSerie(serie) {
    try {
        let [respostas] =
            await connection.query(
                `INSERT INTO series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao) 
            VALUES (?, ?, ?, ?, ?, ?)`,
                [serie.titulo, serie.ano_lancamento, serie.genero, serie.temporadas, serie.criador, serie.avaliacao]
            )

        return respostas.insertId;
    }

    catch (err) {
        console.error('Erro ao criar uma nova Serie' + err)
        throw err
    }
}