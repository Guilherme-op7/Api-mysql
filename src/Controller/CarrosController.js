import { Router } from "express";

import  InserirCarrosService  from '../service/Carros/InserirCarrosService.js';
import  ListarCarrosService  from '../service/Carros/ListarCarrosService.js';
import  ListarCarrosIDService  from '../service/Carros/ListarCarrosIDService.js';
import  FiltrarCarrosService  from '../service/Carros/FiltrarCarrosService.js';
import AtualizarCarrosIDService from '../service/Carros/AtualizarCarrosIDService.js';
import DeletarCarrosIDService from '../service/Carros/DeletarCarrosIDService.js';


const endpoints = Router()

endpoints.get('/carros', async (req, res) => {
    let carros = await ListarCarrosService();

    res.json(carros);
})

endpoints.get('/carros/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await ListarCarrosIDService(id)

    res.json(Resultados)
})

endpoints.get('/carross/filtrar', async (req, resp) => {
  let modelo = req.query.modelo;
  let registros = await FiltrarCarrosService(modelo);
  resp.send(registros);
})


endpoints.post('/carros', async (req, res) => {
    let carros = req.body;

    let Idcarro = await InserirCarrosService(carros);

    res.status(201).json({
        id: Idcarro
    })
})

endpoints.put('/carros/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body; 

    let NovosDados = await AtualizarCarrosIDService(id, Dados);

    res.json(NovosDados)
})

endpoints.delete('/carros/:id', async (req, res) => {
    let id = req.params.id;

    let Resultados = await DeletarCarrosIDService(id)

    res.json()
})

export default endpoints