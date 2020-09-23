//importacion mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definicion del esquema
let PertSchema = new Schema({
    dpi: { type: Number, required: true, max: 13},
    nit: { type: Number, required: true, max: 9},
    firtsname: {type: String, required: true, max: 100},
    secondname: {type: String, required: false, max: 100},
    lastname: {type: String, required: true, ma: 100},
    lastname2: { type: String, required: false, max: 100},
    datenac: {type: String, required: true},
    Apename: {type: String, required: false},
    nominal: {type: String, required: true},
    funcional: {type: String, required: true},
    area: {type: String, required: true},
    emailins: {type: String, required: true},
    emailper: {type: String, required: true},
    telcasa: {type: Number, required: true, min: 8},
    cel: {type: Number, required:true, min: 8}
});

//importacion del esquema
module.exports = mongoose.model("Permanente", PertSchema);