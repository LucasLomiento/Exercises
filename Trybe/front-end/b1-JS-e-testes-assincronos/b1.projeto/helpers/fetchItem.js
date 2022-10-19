const fetchItem = async (itemId) => {
  const result = await fetch(`https://api.mercadolibre.com/items/${itemId}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => new Error('You must provide an url'));

  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
