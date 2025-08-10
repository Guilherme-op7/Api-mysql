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

export async function ListarPizzasID(id) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pizzas
                where id = ?`, [id]
            )

        return resultados;
    }

    catch (err) {
        console.error('Erro ao listar o id da pizza!')
        throw err
    }
}

export async function FiltarPizzas(nome) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pizzas
                WHERE nome like ?`, [`%${nome}%`]
            )

        return resultados;
    }

    catch (err) {
        console.error('Erro ao filtrar todas as pizzas!')
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

export async function AtualizarPizzasID(NovosDados, id) {
    try {
        let [resultados] =
            await connection.query(
                `UPDATE pizzas
                SET nome = ?,
                descricao = ?,
                preco = ?,
                tamanho = ?,
                vegetariana = ?,
                ingredientes = ?,
                categoria = ?
                WHERE id = ?`,
                [NovosDados.nome, NovosDados.descricao, NovosDados.preco, NovosDados.tamanho, NovosDados.vegetariana, NovosDados.ingredientes, NovosDados.categoria, id]
            )

        let IdPizzas = resultados.id

        return IdPizzas
    }

    catch (err) {
        console.error('Erro ao atualizar nova pizza!' + err)
        throw err
    }
}

export async function DeletarPizzaID(id) {
    try {
        let [resultados] =
            await connection.query(
                `DELETE FROM pizzas
                WHERE id = ?`, [id]
            )

        return resultados;
    }

    catch (err) {
        console.error('Erro ao deletar a pizza!')
        throw err
    }
}