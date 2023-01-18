const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// Get All products
const getProducts = async (token) => {
  const userUid = token.split(' ')[1];
  const user = (await knex('users').where({ uid: userUid }))[0];
  const products = await knex('products')
    .select('products.*', 'favorites.id as favoritesID')
    .leftJoin('favorites', function () {
      this.on('products.id', '=', 'favorites.product_id');
      this.andOnVal('favorites.user_id', '=', `${user ? user.id : ''}`);
    });
  return products;
};

// Get products by id
const getProductById = async (id) => {
  if (!id) {
    throw new HttpError('Id should be a number', 400);
  }
  try {
    const products = await knex('products')
      .select('products.id as id', 'name', 'description', 'price')
      .where({ id });
    if (products.length === 0) {
      throw new HttpError(`incorrect entry with the id of ${id}`, 404);
    }
    return products;
  } catch (error) {
    return error.message;
  }
};

// Get products by Category
const getProductsByCategory = async (token, category, limit, offset) => {
  let products = [];
  if (!isNaN(category)) {
    throw new HttpError('Category should be a String', 400);
  }
  try {
    if (token) {
      const userUid = token.split(' ')[1];
      const user = (await knex('users').where({ uid: userUid }))[0];
      products = await knex('products')
        .select(
          'products.id as id',
          'products.name',
          'products.description',
          'products.price',
          'categories.name as cname',
          'favorites.id as favoritesID',
        )
        .leftJoin('categories', 'products.category_id', 'categories.id')
        .offset(offset)
        .leftJoin('favorites', function () {
          this.on('products.id', '=', 'favorites.product_id');
          this.andOnVal('favorites.user_id', '=', `${user ? user.id : ''}`);
        });
    }

    if (products.length === 0) {
      throw new HttpError(
        `There are no products available with this category ${category}`,
        404,
      );
    }
    let categoryProducts = products.filter((product) => {
      return product.cname === category;
    });

    if (categoryProducts.length < limit) {
      categoryProducts = products
        .sort(() => Math.random() - Math.random())
        .slice(0, limit);
    }
    return categoryProducts;
  } catch (error) {
    return error.message;
  }
};

// Get Search product by Name
const getProductBySearch = async (search, res) => {
  if (!isNaN(search)) {
    throw new HttpError('Serach should be a String', 400);
  }
  try {
    const productSearch = await knex('products').where(
      'products.name',
      'like',
      `%${search}%`,
    );
    res.json(productSearch);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProductBySearch,
  getProducts,
  getProductById,
  getProductsByCategory,
};
