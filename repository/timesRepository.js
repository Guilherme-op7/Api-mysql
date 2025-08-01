import connection from "../connection.js";

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