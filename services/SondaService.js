import SondaModel from "../Models/SondaModel.js";

class SondaService {

  sondaModel = new SondaModel();
  
  ingresarDatosSonda = async(id, temperatura) => {
    try {
      const data = await this.sondaModel.guardarDatosSonda(id, temperatura);
      return data;
    } catch (error) {
      throw error;
    }
  }

  listarDatosSondas = async() => {
    try {
      const data = await this.sondaModel.listarSondas();
      return data;
    } catch (error) {
      throw error;
    }
  }

  listarSondaPorId = async(id) => {
    try {
      const datosValidosID = id >= 1 && id <= 5;
      if(!datosValidosID) throw error;
      const data = await this.sondaModel.listarSondaPorId(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

}

export default SondaService;