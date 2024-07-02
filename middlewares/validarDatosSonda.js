export const validarDatosSonda = (req, res, next) => {
  const { id, temperatura } = req.body;

  const datosValidosID = id >= 1 && id <= 5;
  const datosValidosTemperatura = temperatura >= -20 && temperatura <= 100;

  if(!datosValidosID || !datosValidosTemperatura) 
    return res.status(422).send({ errorMsg: "datos no válidos" });

  next();
};