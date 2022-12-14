const fetchProducts = async (product) => {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => new Error('You must provide an url'));
  
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}