import connection from "../connection.js";

export async function ListarEsportes() {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM ESPORTES`
            )

        return respostas;

    }

    catch (err) {
        console.error('Erro ao listar todos os esportes' + err)
        throw err
    }
}

export async function CriarEsporte(esportes) {
    try {
        let [respostas] =
            await connection.query(
                `INSERT INTO esportes (nm_esporte, modalidade_esporte, origem_esporte, ano_de_criacao, numero_de_jogadores, popularidade_esporte)
                VALUES (?, ?, ?, ?, ?, ?)`,
                [esportes.nm_esporte, esportes.modalidade_esporte, esportes.origem_esporte, esportes.ano_de_criacao, esportes.numero_de_jogadores, esportes.popularidade_esporte]
            )

        return respostas;
    }

    catch (err) {
        console.error('Erro ao criar um novo esporte' + err)
        throw err
    }
}