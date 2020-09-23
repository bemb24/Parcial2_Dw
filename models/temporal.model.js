//importacion mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definicion del esquema
let TempSchema = new Schema({
    name: {type: String, required: true, max: 100},
    puesto: {type: String, required: false, max: 100},
    lyg: {type: String, required: true, ma: 100},
    tel: {type: Number, required: true, min: 8},
});

//importacion del esquema
module.exports = mongoose.model("Temporal", TempSchema);