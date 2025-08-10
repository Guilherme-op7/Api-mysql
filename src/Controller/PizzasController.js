import { Router } from "express";

import CriarPizzasService from '../service/Pizzas/InserirPizzasService.js';
import ListarPizzasService from "../service/Pizzas/ListarPizzasService.js";
import AtualizarPizzasIDService from "../service/Pizzas/AtualizarPizzasIDService.js"
import DeletarPizzaIDService from "../service/Pizzas/DeletarPizzasIDService.js";
import ListarPizzasIDService from "../service/Pizzas/ListarPizzasIDService.js"
import FiltrarPizzasService from "../service/Pizzas/FiltrarPizzasService.js"

const endpoints = Router()

endpoints.get('/pizza', async (req, res) => {
    let pizzas = await ListarPizzasService();

    res.json(pizzas)
})

endpoints.get('/pizza/:id', async (req, res) => {
    let id = req.params.id;

    let pizzas = await ListarPizzasIDService(id);

    res.json(pizzas)
})

endpoints.get('/pizzaa/filtrar', async (req, res) => {
    let nome = req.query.nome;

    let pizzas = await FiltrarPizzasService(nome);

    res.json(pizzas)
})

endpoints.post('/pizza', async (req, res) => {
    let pizzas = req.body;

    let IdPizza = await CriarPizzasService(pizzas);

    res.status(201).json({
        id: IdPizza
    })
})

endpoints.put('/pizza/:id', async (req, res) => {
    let id = req.params.id;
    let Dados = req.body;

    let Resultados = await AtualizarPizzasIDService(Dados, id)

    res.json()
})

endpoints.delete('/pizza/:id', async (req, res) => {
    let id = req.params.id;

    let Dados = await DeletarPizzaIDService(id)

    res.json()
})


export default endpoints