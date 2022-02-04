const mongoose = require('mongoose');

const SensorSchema = mongoose.Schema({
    Tamanho: String, // Parse futuro para separar (3 3 3) Evitando utilizacao do array, reduzindo possiveis erros
    TensaoBateria : Number,
    Marca : String,
    Tipo : String,
    CoordenadaGPS : String,
    UltimaMedicao : String

});

module.exports = mongoose.model('Sensores', SensorSchema);