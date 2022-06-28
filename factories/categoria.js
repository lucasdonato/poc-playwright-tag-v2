const faker = require('faker-br')

const categoriaFactory = {
    descricao: `Categoria playwright ${faker.commerce.productMaterial()}`,
    tipo: 'P',
    localizacao: null
}

module.exports = categoriaFactory