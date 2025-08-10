import connection from "../connection.js";

export async function ListarTenis() {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM tenis`
            )

        return resultados

    }

    catch (err) {
        console.error('Erro ao Listar todos os tenis' + err)
        throw err
    }
}

export async function ListarTenisID(id) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM tenis
                WHERE ID  = ?` , [id]
            )

        return resultados

    }

    catch (err) {
        console.error('Erro ao Listar o id do tenis' + err)
        throw err
    }
}

export async function Filtrartenis(nome) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM tenis
                WHERE nome like ?` , [`%${nome}%`]
            )

        return resultados

    }

    catch (err) {
        console.error('Erro ao filtrar todos os tenis' + err)
        throw err
    }
}

export async function CriarTenis(tenis) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [tenis.nome, tenis.marca, tenis.cor, tenis.tamanho, tenis.preco, tenis.categoria, tenis.estoque]
            )

        let idTenis = resultados.insertId

        return idTenis
    }

    catch (err) {
        console.error('erro ao criar um novo tenis' + err)
        throw err
    }
}

export async function AtualizarTenisID(NovosDados, id) {
    try {
        let [resultados] =
            await connection.query(
                `UPDATE TENIS
            SET nome = ?, 
            marca = ?, 
            cor = ?,
            tamanho = ?,
            preco = ?,
            categoria = ?,
            estoque = ?
            WHERE id = ?`,
                [NovosDados.nome, NovosDados.marca, NovosDados.cor, NovosDados.tamanho, NovosDados.preco, NovosDados.categoria, NovosDados.estoque, id]
            )

        let idTenis = resultados.id

        return idTenis
    }

    catch (err) {
        console.error('erro ao atualizar o tenis' + err)
        throw err
    }
}

export async function DeletarTenisID(id) {
    try {
        let [resultados] =
            await connection.query(
                `DELETE FROM tenis
                WHERE id = ?` , [id]
            )

        return resultados

    }

    catch (err) {
        console.error('Erro ao Deletar o tenis' + err)
        throw err
    }
}