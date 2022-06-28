import faker from 'faker-br'

export const categoriaFactory = {
    descricao: `Categoria playwright ${faker.commerce.productMaterial()}`,
    tipo: 'P',
    localizacao: null
}

