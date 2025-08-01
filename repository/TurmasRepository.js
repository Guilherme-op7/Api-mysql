import connection from "../connection.js";


export async function ListarTurmas() {
    try {
        let [respostas] =
            await connection.query(
                `SELECT * FROM frei`
            )

        return respostas
    } 
    
    catch (err) {
        console.error('Erro ao listar todas as turmas' + err)
        throw err;
    }
}

export async function CriarTurma(turma) {
    try {
        let [respostas] =
            await connection.query(
                `INSERT INTO frei (nm_curso,ds_curso,nr_ano_letivo,qtd_capacidade,bt_ativo,dt_inclusao)
                VALUES (?, ?, ?, ?, ?, ?)`,
                [turma.nm_curso, turma.ds_curso, turma.nr_ano_letivo, turma.qtd_capacidade, turma.bt_ativo, turma.dt_inclusao]
            )

        let Idturmas = respostas.insertId

        return Idturmas
    } 
    
    catch (err) {
        console.error('Erro ao criar uma nova turma!' + err)
        throw err
    }
}