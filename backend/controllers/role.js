import role from "../models/role.js";

const registerRole = async (req, res) => {
  //require, response
  if (!req.body.name || !req.body.description) {
    // Validamos si hay datos
    return res.status(400).send("Incomplete data"); // Se utiliza 400 cuando hay un error
  }

  const exisingRole = await role.findOne({ name: req.body.name }); // se busca en mongo si ya existe el rol -- await para esperar una respuesta
  // Validamos si ya existe
  if (exisingRole) return res.status(400).send("The role already exist"); // Devolvemos que el rol ya existe

  const roleSchema = new role({
    // Se le pasan los datos a la función para guardar en DB
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await roleSchema.save(); // Se guarda en la BD
  if (!result) return res.status(400).send("Failed to register rol");

  return res.status(200).send({ result });
};

export default {registerRole};