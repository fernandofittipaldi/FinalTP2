class SondaModel {

  datosSondas = [];

  guardarDatosSonda = async(id, temperatura) => {
    const newSonda = {
      id: id,
      temperatura: temperatura,
      timeStamp: Date.now()
    }
    this.datosSondas.push(newSonda);
    return newSonda;
  }

  listarSondas = async() => {
    return this.datosSondas;
  };

  listarSondaPorId = async(id) => {
    const data = this.datosSondas.filter((sonda) => sonda.id == id);
    return data; 
  }

}

export default SondaModel;