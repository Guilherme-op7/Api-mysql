import connection from "../connection.js";


export async function ListarTimes() {
    try {
        let [resposta] =

            await connection.query(
                `SELECT * FROM times_futebol`
            )

        return resposta
    }

    catch (err) {
        console.error('Erro ao listar os times' + err);
        throw err
    }
}

export async function ListarTimesID(id) {
    try {
        let [resposta] =

            await connection.query(
                `SELECT * FROM times_futebol
                WHERE id = ?`, [id]
            )

        return resposta
    }

    catch (err) {
        console.error('Erro ao listar o ID do time!' + err);
        throw err
    }
}

export async function FiltrarTimes(nome) {
    try {
        let [resposta] =

            await connection.query(
                `SELECT * FROM times_futebol
                WHERE nome like ?`, [`%${nome}%`]
            )

        return resposta
    }

    catch (err) {
        console.error('Erro ao filtrar os times' + err);
        throw err
    }
}

export async function CriarTime(time) {
    try {
        let [resposta] =

            await connection.query(
                `INSERT INTO times_futebol (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [time.nome, time.cidade, time.estado, time.pais, time.ano_fundacao, time.estadio, time.capacidade_estadio, time.tecnico, time.liga]
            );

        let Idtime = resposta.insertId
        return Idtime;
    }

    catch (err) {
        console.err('Erro ao criar o time' + err);
        throw err
    }

}

export async function AtualizarTimeID(NovosDados, id) {
    try {
        let [resposta] =

            await connection.query(
                `UPDATE times_futebol
                SET nome = ?,
                cidade = ?,
                estado = ?,
                pais = ?,
                ano_fundacao = ?,
                estadio = ?,
                capacidade_estadio = ?,
                tecnico = ?,
                liga = ?
                WHERE id = ?`,
                [NovosDados.nome, NovosDados.cidade, NovosDados.estado, NovosDados.pais, NovosDados.ano_fundacao, NovosDados.estadio, NovosDados.capacidade_estadio,
                NovosDados.tecnico, NovosDados.liga, id]
            );

        let Idtime = resposta.id
        return Idtime;
    }

    catch (err) {
        console.err('Erro ao atualizar o time' + err);
        throw err
    }

}

export async function DeletarTimeID(id) {
    try {
        let [resposta] =

            await connection.query(
                `DELETE FROM times_futebol
                WHERE id = ?`, [id]
            )

        return resposta
    }

    catch (err) {
        console.error('Erro ao deletar o time!' + err);
        throw err
    }
}