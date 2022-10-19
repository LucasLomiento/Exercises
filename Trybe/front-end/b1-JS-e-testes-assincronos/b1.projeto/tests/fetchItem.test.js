require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it("Testa se fetchItem é uma função", () => {
    expect(typeof fetchItem).toBe('function');
  })

  it("Chama a função fetchItem com o argumento 'MLB1615760527' e testa se fetch foi chamada", async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it("Verifica se fetchItem com o argumento do item 'MLB1615760527' usa o endpoint correto", async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it("Verifica se fetchItem com o argumento do item 'MLB1615760527' tem o retorno igual ao do objeto 'item'", async () => {
    let actual = await fetchItem('MLB1615760527');
    expect(actual).toEqual(item);
  })

  it("Verifica se a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    let actual = await fetchItem();
    expect(actual).toEqual(new Error('You must provide an url'));
  })
});
