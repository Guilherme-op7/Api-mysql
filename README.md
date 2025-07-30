# 🧠 Projeto API - Node.js + Express + MySQL2

Este projeto foi desenvolvido como parte da disciplina de Algoritmos e programação, com o objetivo de transformar as tabelas criadas nos bimestres anteriores em uma API funcional. A aplicação foi construída com **Node.js**, **Express** e **MySQL2**, com foco em organização, boas práticas e funcionamento completo dos endpoints.

> 👨‍💻 Guilherme Neto -  Informática D

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MySQL2
- Thunder Client (para testes dos endpoints)
- JavaScript (ESModules)

---

## 📌 Funcionalidades

A API possui suporte para **11 tabelas** diferentes, cada uma com dois endpoints:

- **GET /tabela** → Lista todos os registros da tabela
- **POST /tabela** → Insere um novo registro na tabela

### ✅ Exemplo de Uso

#### 🔹 GET `/aluno`

```http
GET http://localhost:5010/aluno
🔹 POST /aluno
http
Copiar
Editar
POST http://localhost:5010/aluno
Content-Type: application/json

{
  "nome": "João Silva",
  "idade": 18,
  "curso_id": 2
}
🔧 Como Rodar o Projeto
Clone este repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

npm install

Configure seu banco de dados MySQL (as tabelas devem estar criadas previamente).

Inicie o servidor:

npm start

Use Thunder Client ou Postman para testar os endpoints.

🧠 Aprendizados
Prática real com CRUD e APIs REST

Reutilização de tabelas anteriores

Organização de projetos com múltiplos repositórios

#borapracima
#sanguenosoio 🔥
