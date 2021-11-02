import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: String,
    description: String,
    registerDate: { type: Date, default: Date.now }, // Se obtiene la fecha actual y se guarda
    dbStatus: Boolean,
});

const role = mongoose.model("roles", roleSchema); //  Guardar en mongo

export default role;