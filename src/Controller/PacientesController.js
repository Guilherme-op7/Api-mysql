import { Router } from "express";

import ListarPacientesService from '../service/Pacientes/ListarPacientesService.js';
import CriarPacienteService from "../service/Pacientes/InserirPacientesService.js";
import ListarPacientesIDService from "../service/Pacientes/ListarPacientesIDService.js";
import FiltrarPacientesService from "../service/Pacientes/FIltrarPacientesService.js";
import AtualizarPacienteIDService from "../service/Pacientes/AtualizarPacientesIDService.js";
import DeletarPacientesIDService from "../service/Pacientes/DeletarPacientesIDService.js";

const endpoints = Router()

endpoints.get('/pacientes', async (req, res) => {
    let pacientes = await ListarPacientesService();

    res.json(pacientes)
})

endpoints.get('/pacientes/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await ListarPacientesIDService(id)

    res.json(Resultados)
})

endpoints.get('/pacientess/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let Resultados = await FiltrarPacientesService(nome)

    res.json(Resultados)
})

endpoints.post('/pacientes', async (req, res) => {
    let pacientes = req.body;

    let IdPacientes = await CriarPacienteService(pacientes)

    res.status(201).json({
        id: IdPacientes
    })
})

endpoints.put('/pacientes/:id', async (req, res) => {
    let id = req.params.id;
    let dados = req.body;

    let Resultados = await AtualizarPacienteIDService(dados, id)

    res.json()
})

endpoints.delete('/pacientes/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await DeletarPacientesIDService(id)

    res.json()
})

export default endpoints