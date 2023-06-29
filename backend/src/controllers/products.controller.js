const { productsService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const findAllProducts = async (_req, res) => {
  const { status, data } = await productsService.findAllProducts();
  res.status(mapStatusHTTP(status)).json(data);
};

const findByIdProducts = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findByIdProducts(id);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  findAllProducts,
  findByIdProducts,
};