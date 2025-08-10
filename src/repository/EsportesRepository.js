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

export async function ListarEsportesID(id) {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM esportes
                WHERE id = ?`, [id]
            )

        return respostas;

    }

    catch (err) {
        console.error('Erro ao listar o ID do esporte' + err)
        throw err
    }
}

export async function FiltrarEsportes(nome) {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM esportes
                WHERE nm_esporte like ?`, [`%${nome}%`]
            )

        return respostas;

    }

    catch (err) {
        console.error('Erro ao Filtrar os esportes' + err)
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
        let IdEsportes = respostas.insertId
        return IdEsportes;
    }

    catch (err) {
        console.error('Erro ao criar um novo esporte' + err)
        throw err
    }
}

export async function AtualizarEsporteID(NovosDados, id) {
    try {
        let [respostas] =
            await connection.query(
                `UPDATE esportes
                SET nm_esporte = ?, 
                    modalidade_esporte = ?, 
                    origem_esporte = ?,
                    ano_de_criacao = ?, 
                    numero_de_jogadores = ?,
                    popularidade_esporte = ?
                    WHERE id = ?`,
                [NovosDados.nm_esporte, NovosDados.modalidade_esporte, NovosDados.origem_esporte, NovosDados.ano_de_criacao, NovosDados.numero_de_jogadores,
                NovosDados.popularidade_esporte, id]
            )
        let IdEsportes = respostas.id
        return IdEsportes;
    }

    catch (err) {
        console.error('Erro ao atualizar um esporte' + err)
        throw err
    }

}

export async function DeletarEsportesID(id) {
    try {
        let [respostas] =
            await connection.query(
                `DELETE from ESPORTES
                WHERE id = ?`, [id]
            )

        return respostas;

    }

    catch (err) {
        console.error('Erro ao deletar os esportes' + err)
        throw err
    }
}