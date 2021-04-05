const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// activity 28 to the rescue again
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    // here we use the constructor class of category in our models and find all of its associated products by including them using deconstructing? im pretty sure thats whats happening here
    const allCategories = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
