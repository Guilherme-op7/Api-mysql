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

export async function CriarCarros(carros) {
    try {
        let [respostas] =
            await connection.query(
                `INSERT INTO Carros (id, Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado) 
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [carros.id, carros.Valor, carros.Placa, carros.modelo, carros.ano_fabricacao, carros.cor, carros.ar_condicionado]
            );

        return respostas;
    }

    catch (err) {
        console.error('Erro ao criar um novo carro!' + err)
        throw err;
    }
}