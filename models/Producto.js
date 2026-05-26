const mongoose = require('mongoose')


const productoSchema = new mongoose.Schema({
    
})

const Producto = mongoose.model('Producto', productoSchema)
module.exports = Producto