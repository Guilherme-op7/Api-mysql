import { CriarTime, ListarTimes } from './repository/timesRepository.js';
import { CriarAnimes, ListarAnimes } from './repository/animesRepository.js';
import { CriarSerie, ListarSeries } from './repository/seriesRepository.js';
import { CriarCarros, ListarCarros } from './repository/CarrosRepository.js';
import { CriarEsporte, ListarEsportes } from './repository/EsportesRepository.js';
import { CriarTurma, ListarTurmas } from './repository/TurmasRepository.js';
import { CriarPaciente, ListarPacientes } from './repository/PacientesRepository.js';
import { CriarJogo, ListarJogos } from './repository/JogosRepository.js';
import { CriarPizzas, ListarPizzas } from './repository/PizzasRepository.js';
import { CriarTenis, ListarTenis } from './repository/TenisRepository.js';
import { CriarEstado, ListarEstados } from './repository/EstadosRepository.js';

import 'dotenv/config.js';
import express from 'express';

const server = express();
server.use(express.json());

server.get('/times', async (req, res) => {
    let times = await ListarTimes()

    res.json(times)
})

server.post('/times', async (req, res) => {
    let times = req.body;

    let Idtime = await CriarTime(times)

    res.status(201).json({
        id: Idtime,
        ...times
    });
})

server.get('/animes', async (req, res) => {
    let anime = await ListarAnimes();

    res.json(anime)
})

server.post('/animes', async (req, res) => {
    let animes = req.body;

    let Idanime = await CriarAnimes(animes);

    res.status(201).json({
        id: Idanime,
        ...animes
    });
});

server.get('/series', async (req, res) => {
    let series = await ListarSeries();

    res.json(series)
})

server.post('/series', async (req, res) => {
    let series = req.body;

    let Idserie = await CriarSerie(series);

    res.status(201).json({
        id: Idserie,
        ...series
    })
})

server.get('/carros', async (req, res) => {
    let carros = await ListarCarros();

    res.json(carros);
})

server.post('/carros', async (req, res) => {
    let carros = req.body;

    let Idcarro = await CriarCarros(carros);

    res.status(201).json({
        id: Idcarro,
        ...carros
    })
})

server.get('/esportes', async (req, res) => {
    let esportes = await ListarEsportes();

    res.json(esportes)
})

server.post('/esportes', async (req, res) => {
    let esportes = req.body;

    let idEsportes = await CriarEsporte(esportes);

    res.status(201).json({
        id: idEsportes,
        ...esportes
    })
})

server.get('/turmas', async (req, res) => {
    let turmas = await ListarTurmas();

    res.json(turmas)
})

server.post('/turmas', async (req, res) => {
    let turmas = req.body;

    let IdTurmas = await CriarTurma(turmas);

    res.status(201).json({
        id: IdTurmas,
        ...turmas
    })
})

server.get('/pacientes', async (req, res) => {
    let pacientes = await ListarPacientes();

    res.json(pacientes)
})

server.post('/pacientes', async (req, res) => {
    let pacientes = req.body;

    let IdPacientes = await CriarPaciente(pacientes)

    res.status(201).json({
        id: IdPacientes,
        ...pacientes
    })
})

server.get('/jogos', async (req, res) => {
    let jogos = await ListarJogos();

    res.json(jogos)
})

server.post('/jogos', async (req, res) => {
    let jogos = req.body;

    let IdJogos = await CriarJogo(jogos)

    res.status(201).json({
        id: IdJogos,
        ...jogos
    })
})

server.get('/pizza', async (req, res) => {
    let pizzas = await ListarPizzas();

    res.json(pizzas)
})

server.post('/pizza', async (req, res) => {
    let pizzas = req.body;

    let IdPizza = await CriarPizzas(pizzas);

    res.status(201).json({
        id: IdPizza,
        ...pizzas
    })
})

server.get('/tenis', async (req, res) => {
    let Tenis = await ListarTenis()

    res.json(Tenis)
})

server.post('/tenis', async (req, res) => {
    let tenis = req.body;

    let idTenis = await CriarTenis(tenis)

    res.status(201).json({
        id: idTenis, 
        ... tenis
    })
})

server.get('/estados', async (req, res) => {
    let estados = await ListarEstados();

    res.json(estados)
})

server.post('/estados', async (req, res) => {
    let estados = req.body;

    let IdEstados = await CriarEstado(estados)

    res.status(201).json({
        id: IdEstados,
        ... estados
    })
})

const PORTA = process.env.PORTA;

server.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
