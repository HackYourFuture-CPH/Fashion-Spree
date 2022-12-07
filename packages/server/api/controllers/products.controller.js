const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

// Get All products
const getProducts = async () => {
  return knex.select().table('products');
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
const getProductsByCategory = async (category, limit, offset) => {
  if (!isNaN(category)) {
    throw new HttpError('Category should be a String', 400);
  }

  try {
    const products = await knex('products')
      .select(
        'products.id as id',
        'products.name',
        'products.description',
        'products.price',
      )
      .leftJoin('categories', 'products.category_id', 'categories.id')
      .where('categories.name', 'like', `${category}`)
      .limit(limit)
      .offset(offset);
    if (products.length === 0) {
      throw new HttpError(
        `There are no products available with this category ${category}`,
        404,
      );
    }
    return {
      status: 200,
      data: products,
    };
  } catch (error) {
    return {
      status: error.httpStatus,
      data: [],
      message: error.message,
    };
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
