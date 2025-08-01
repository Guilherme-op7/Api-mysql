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