require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it("Testa se fetchItem é uma função", () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it("Testa se o parametro 'computador' chama o fetch", async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it("Testa se a função chama o fetch com o parametro 'computador'", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it("Testa se o retorno da função com o parametro 'computador' é igual o arquivo 'computadorSearch'", async () => {
    let actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  })

  it("Testa se sem argumento retorna um erro com a mensagem: 'You must provide an url'", async () => {
    let actual = await fetchProducts();
    expect(actual).toEqual(new Error('You must provide an url'));
  })

});
