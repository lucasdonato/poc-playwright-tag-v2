import faker from 'faker-br'

export const produtoFactory = {
    ativo: true,
    descricao: faker.commerce.productName(),
    valor_venda_varejo: 1
}