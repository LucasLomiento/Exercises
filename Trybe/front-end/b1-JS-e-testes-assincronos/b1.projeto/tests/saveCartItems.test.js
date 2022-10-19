const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it("Executa a funcao com um argumento e verifica se localStorage.setItem é chamado.", () => {
    saveCartItems("ID: MLB2863647576 | TITLE: Cpu Pc Gamer Core I7 10ª / 32gb / Ssd 480 / Hd 1tb / 1050ti | PRICE: $6650");
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it("Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems", () => {
    const item = '"ID: MLB2863647576 | TITLE: Cpu Pc Gamer Core I7 10ª / 32gb / Ssd 480 / Hd 1tb / 1050ti | PRICE: $6650"';
    saveCartItems("ID: MLB2863647576 | TITLE: Cpu Pc Gamer Core I7 10ª / 32gb / Ssd 480 / Hd 1tb / 1050ti | PRICE: $6650");
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', item);
  })
});
