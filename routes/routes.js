import { Router } from "express";
import SondaController from "../controllers/SondaController.js";
import { validarDatosSonda } from "../middlewares/validarDatosSonda.js";


const routes = Router();
const sondaController = new SondaController();

routes.post('/', validarDatosSonda, sondaController.ingresarDatosSonda);
routes.get('/', sondaController.listarDatosSondas);
routes.get('/:id', sondaController.listarSondaPorId);



export default routes;