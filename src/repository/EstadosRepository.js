import connection from "../connection.js";

export async function ListarEstados() {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM estado`
            )

        return resultados
    }

    catch (err) {
        console.error('erro ao listar todos os estados!' + err)
    }
}

export async function ListarEstadosID(id) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM estado
                WHERE id_estados = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('erro ao listar o ID do estado!' + err)
    }
}

export async function FiltrarEstados(nome) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM estado
                WHERE nm_estado like ?`, [`%${nome}%`]
            )

        return resultados
    }

    catch (err) {
        console.error('erro ao filtrar os estados!' + err)
    }
}

export async function CriarEstado(estado) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO estado (nm_estado,regiao_estado,capital_estado,praia_estado)
            VALUES (?, ?, ?, ?)`,
                [estado.nm_estado, estado.regiao_estado, estado.capital_estado, estado.praia_estado]
            )
        let idEstado = resultados.insertId
        return idEstado
    }

    catch (err) {
        console.error('Erro ao criar um estado novo' + err)
    }
}

export async function AtualizarEstadoID(estado, id) {
    try {
        let [resultados] =
            await connection.query(
                `UPDATE estado
                SET nm_estado = ?, 
                regiao_estado = ?, 
                capital_estado = ?,
                praia_estado = ?
                WHERE id_estados = ?`
                ,
                [estado.nm_estado, estado.regiao_estado, estado.capital_estado, estado.praia_estado, id]
            )
        let idEstado = resultados.id
        return idEstado
    }

    catch (err) {
        console.error('Erro ao atualizar um estado' + err)
    }
}

export async function DeletarEstadoID(id) {
    try {
        let [resultados] =
            await connection.query(
                `DELETE FROM estado
                WHERE id_estados = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('erro ao deletar o estado!' + err)
    }
}