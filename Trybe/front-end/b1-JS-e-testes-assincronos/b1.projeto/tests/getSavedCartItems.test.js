const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {


  it("teste se o localStorage.getItem é chamado", () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled()
  });

  it("teste se o localStorage.getItem é chamado", () => {
    getSavedCartItems('cartItem')
    expect(localStorage.getItem).toContain('cartItem')
  });
});
