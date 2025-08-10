import AnimesController from './Controller/AnimesController.js'
import CarrosController from './Controller/CarrosController.js'
import EsportesController from './Controller/EsportesController.js'
import EstadosController from './Controller/EstadosController.js'
import JogosController from './Controller/JogosController.js'
import PacientesController from './Controller/PacientesController.js'
import PizzasController from './Controller/PizzasController.js'
import SeriesController from './Controller/SeriesController.js'
import TenisController from './Controller/TenisController.js'
import TimesController from './Controller/TimesController.js'


export default function Roteamento(server) {

    server.use(AnimesController)
    server.use(CarrosController)
    server.use(EsportesController)
    server.use(EstadosController)
    server.use(JogosController)
    server.use(PacientesController)
    server.use(PizzasController)
    server.use(SeriesController)
    server.use(TenisController)
    server.use(TimesController)

}