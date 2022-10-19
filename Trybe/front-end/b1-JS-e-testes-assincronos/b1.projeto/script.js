// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

// Salva no localStore todos os items já no carrinho.
const saveDataCartItems = () => {
  const itemsData = [];
  document.querySelectorAll('.cart__item').forEach((cartItem) => {
    itemsData.push(cartItem.textContent);
  });
  saveCartItems(itemsData);
};

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItemClickListener = (element) => {
  const clickedProduct = element.target;
  clickedProduct.remove();
  saveDataCartItems();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// Carrega o localStorage do carrinho e exebi na tela
const loadCartItemElementByLocalStorage = () => {
  const localItems = getSavedCartItems('cartItem');
  localItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerText = item;
    li.addEventListener('click', cartItemClickListener);
    document.querySelector('.cart__items').appendChild(li);
  });
};

// Implemento botao para limpar o carrinho
document.querySelector('.empty-cart').addEventListener('click', () => {
  document.querySelectorAll('.cart__item').forEach((item) => {
    item.remove();
  });
  saveDataCartItems();
});

window.onload = async () => {
  /** 
  * Inicializa a pagina com os itens da categoria 'computador'
  */
  const products = await fetchProducts('computador');
  products.results.forEach((product) => {
    document.querySelector('.items').appendChild(createProductItemElement(product));
  });
  
  // executa para exibir o carrinho do localstorage na tela
  if (localStorage.getItem('cartItem') !== null) loadCartItemElementByLocalStorage();

  /** 
  * Aplica addEventListener para cada btn adionar ao carrinho e salva os itens no localstorage
  */
  const btnAddOnCart = document.querySelectorAll('.item__add');
  btnAddOnCart.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const item = await fetchItem(btn.parentNode.querySelector('.item_id').textContent);
      document.querySelector('.cart__items').appendChild(createCartItemElement(item));
      saveDataCartItems();
    });
  });
};