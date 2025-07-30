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

export async function CriarTenis(tenis) {
try {
    let [resultados] =
        await connection.query(
            `INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [tenis.nome, tenis.marca, tenis.cor, tenis.tamanho, tenis.preco, tenis.categoria, tenis.estoque]
        )

    return resultados
}

catch (err) {
    console.error('erro ao criar um novo tenis' + err)
    throw err
}
}