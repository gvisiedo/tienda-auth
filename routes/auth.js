const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario')

// POST /auth/registro
router.post('/registro', async function(req, res) {
  // 1. Leer nombre, email y password del body
  // 2. Comprobar si el email ya existe
  // 3. Encriptar la contraseña con bcrypt
  // 4. Crear el usuario en la base de datos
  // 5. Devolver el usuario creado
})

// POST /auth/login
router.post('/login', async function(req, res) {
  // 1. Leer email y password del body
  // 2. Buscar el usuario por email
  // 3. Comparar la contraseña con bcrypt
  // 4. Generar un JWT
  // 5. Devolver el token
})
router.get('/productos', async function(req,res){

})
router.get('/productos/:id', async function(req,res){

})
router.post('/productos', async function(req,res){

})
router.put('/productos/:id', async function(req,res){

})
router.delete('/productos/:id', async function(req,res){

})
module.exports = router