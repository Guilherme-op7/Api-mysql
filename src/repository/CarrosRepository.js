import connection from "../connection.js";

export async function ListarCarros() {
    try {
        let [respostas] =

            await connection.query(
                `SELECT * FROM Carros`
            )

        return respostas;
    }

    catch (err) {
        console.error('Erro ao listar todos os carros!' + err)
        throw err;
    }
}

export async function ListarCarrosID(id) {
    try {
        let [respostas] =

            await connection.query(
                `SELECT * FROM Carros
                WHERE id = ?`, [id]
            )

        return respostas;
    }

    catch (err) {
        console.error('Erro ao listar os carros por ID!' + err)
        throw err;
    }
}


export async function FiltrarCarros(modelo) {
    try {
        let [respostas] =

            await connection.query(
                `SELECT * FROM carros
                WHERE modelo like ?`, [`%${modelo}%`]
            )

        return respostas;
    }

    catch (err) {
        console.error('Erro ao filtrar os carros!' + err)
        throw err;
    }
}

export async function CriarCarros(carros) {
    try {
        let [respostas] =
            await connection.query(
                `INSERT INTO Carros (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [carros.id, carros.Valor, carros.Placa, carros.modelo, carros.ano_fabricacao, carros.cor, carros.ar_condicionado]
            );

        let IdCarro = respostas.insertId
        return IdCarro;
    }

    catch (err) {
        console.error('Erro ao criar um novo carro!' + err)
        throw err;
    }
}

export async function AtualizarCarrosID(id, carros) {
    try {
        let [respostas] =
            await connection.query(
                `UPDATE carros
                SET id = ?, 
                Valor = ?, 
                Placa = ?,
                modelo = ?, 
                ano_fabricacao = ?,
                cor = ?,
                ar_condicionado = ?
                WHERE id = ?`,
                [carros.id, carros.Valor, carros.Placa, carros.modelo, carros.ano_fabricacao, carros.cor, carros.ar_condicionado, id]
            );

        let IdCarro = respostas.id
        return IdCarro;
    }

    catch (err) {
        console.error('Erro ao atualizar um carro!' + err)
        throw err;
    }
}

export async function DeletarCarrosID(id) {
    try {
        let [respostas] =

            await connection.query(
                `DELETE FROM Carros
                WHERE id = ?`, [id]
            )

        return respostas;
    }

    catch (err) {
        console.error('Erro ao deletar os carros!' + err)
        throw err;
    }
}