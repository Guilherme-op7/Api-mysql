import connection from "../connection.js";

export async function ListarSeries() {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM series`
            )

        let Idserie = respostas

        return Idserie
    }

    catch (err) {
        console.error('Erro ao listar todas as series' + err)
        throw err
    }
}

export async function ListarSeriesID(id) {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM series
                where id = ?`, [id]
            )

        return respostas
    }

    catch (err) {
        console.error('Erro ao listar o id da series' + err)
        throw err
    }
}

export async function FiltrarSerie(nome) {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM series
                where titulo like ?`, [`%${nome}%`]
            )


        return respostas
    }

    catch (err) {
        console.error('Erro ao filtrar todas as series' + err)
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

export async function AtualizarSerieID(NovosDados, id) {
    try {
        let [respostas] =
            await connection.query(
                `UPDATE series
                SET titulo = ?,
                ano_lancamento = ?,
                genero = ?,
                temporadas = ?,
                criador = ?,
                avaliacao = ?
                WHERE id = ?`,
                [NovosDados.titulo, NovosDados.ano_lancamento, NovosDados.genero, NovosDados.temporadas, NovosDados.criador, NovosDados.avaliacao, id]
            )

        return respostas.id;
    }

    catch (err) {
        console.error('Erro ao atualizar uma Serie' + err)
        throw err
    }
}

export async function DeletarSerieID(id) {
    try {
        let [respostas] =
            await connection.query(
                `DELETE FROM series
                where id = ?`, [id]
            )


        return respostas
    }

    catch (err) {
        console.error('Erro ao deletar a serie!' + err)
        throw err
    }
}