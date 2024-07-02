import SondaService from "../services/SondaService.js";

class SondaController {

  sondaService = new SondaService();

  ingresarDatosSonda = async(req, res) => {
    try {
      const { id, temperatura } = req.body;
      const data = await this.sondaService.ingresarDatosSonda(id, temperatura);
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(422).send({errorMsg: "datos no válidos"});
    }
  }

  listarDatosSondas = async(req, res) => {
    try {
      const data = await this.sondaService.listarDatosSondas();
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(422).send({errorMsg: "error al listar"});
    }
  }

  listarSondaPorId = async(req, res) => {
    try {
      const { id } = req.params;
      const data = await this.sondaService.listarSondaPorId(id);
      res.status(200).send({Msg: data});
    } catch (error) {
      res.status(422).send({errorMsg: "Número de sonda incorrecto"});
    }
  }
}

export default SondaController;