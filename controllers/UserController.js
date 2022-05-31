const { response } = require('express')
const { Usuario } = require ('../database/models')

const UserController = {
    index: async (req,res) => {
        const users = await Usuario.findAll()

        response.render('index', {alunos})
    }
}
module.exports = UserController