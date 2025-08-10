import connection from "../connection.js";

export async function ListarPacientes() {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pacientes`
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao listar todos os pacientes!' + err)
        throw err
    }
}

export async function ListarPacientesID(id) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pacientes
                WHERE id_hospital = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao listar o id do paciente!' + err)
        throw err
    }
}

export async function FiltrarPacientes(nome) {
    try {
        let [resultados] =
            await connection.query(
                `SELECT * FROM pacientes
                WHERE nome like ?`, [`%${nome}%`]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao filtrar todos os pacientes!' + err)
        throw err
    }
}

export async function CriarPaciente(pacientes) {
    try {
        let [resultados] =
            await connection.query(
                `INSERT INTO Pacientes (nome, idade, sexo, endereco, telefone, data_admissao)
            VALUES (?, ?, ?, ?, ?, ?)`,
                [pacientes.nome, pacientes.idade, pacientes.sexo, pacientes.endereco, pacientes.telefone, pacientes.data_admissao]
            )
        let IdPacientes = resultados.insertId
        return IdPacientes
    }

    catch (err) {
        console.error('Erro ao criar o paciente!' + err)
        throw err
    }
}

export async function AtualizarPacienteID(NovosDados, id) {
    try {
        let [resultados] =
            await connection.query(
                `UPDATE pacientes
                SET nome = ?,
                idade = ?,
                sexo = ?,
                endereco = ?, 
                telefone = ?,
                data_admissao = ?
                WHERE id_hospital = ?`,
                [NovosDados.nome, NovosDados.idade, NovosDados.sexo, NovosDados.endereco, NovosDados.telefone, NovosDados.data_admissao, id]
            )
        let IdPacientes = resultados.id
        return IdPacientes
    }

    catch (err) {
        console.error('Erro ao atualizar o paciente!' + err)
        throw err
    }
}

export async function DeletarPacientesID(id) {
    try {
        let [resultados] =
            await connection.query(
                `DELETE FROM pacientes
                WHERE id_hospital = ?`, [id]
            )

        return resultados
    }

    catch (err) {
        console.error('Erro ao deletar o paciente!' + err)
        throw err
    }
}