const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// activity 28 to the rescue again
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    
    const allCategories = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      
      include: [{ model: Product}]
    });

    if (!singleCategory) {
      res.status(404).json({ message: 'No traveller found with this id!' });
      return;
    }

    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
  const createCategory = await Category.create(req.body);
  res.status(200).json(createCategory);
} catch (err) {
  res.status(400).json(err);
}
});

// activity 9 for this one
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
  const updateCategory = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.status(200).json(updateCategory);
  } catch (err){
    res.status(500).json(err)
  }
});

// activity 28
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroyCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!destroyCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(destroyCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
