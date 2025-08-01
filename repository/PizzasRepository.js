import connection from "../connection.js";

export async function ListarPizzas() {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pizzas`
            )

        return resultados;
    }

    catch (err) {
        console.error('Erro ao listar todas as pizzas!')
        throw err
    }
}

export async function CriarPizzas(pizzas) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO pizzas (nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria)    
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [pizzas.nome, pizzas.descricao, pizzas.preco, pizzas.tamanho, pizzas.vegetariana, pizzas.ingredientes, pizzas.categoria]
            )

        let IdPizzas = resultados.insertId

        return IdPizzas
    }

    catch (err) {
        console.error('Erro ao criar nova pizza!' + err)
        throw err
    }
}