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