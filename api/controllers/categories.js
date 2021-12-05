const express = require('express');
const router = express.Router();
const db = require('../models');
const {Category} = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/', (req,res) => {
Category.findAll({})
    .then(categories => res.json(categories));
});


router.post('/', (req, res) => {
  let { content } = req.body;
  
  Category.create({ content })
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Category .findByPk(id)
    .then(category => {
      if(!category ) {
        return res.sendStatus(404);
      }

      res.json(category );
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Category .findByPk(id)
    .then(category  => {
      if(!category ) {
        return res.sendStatus(404);
      }

      category .content = req.body.content;
      category .save()
        .then(category  => {
          res.json(category );
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Category .findByPk(id)
    .then(category  => {
      if(!category ) {
        return res.sendStatus(404);
      }

      category .destroy();
      res.sendStatus(204);
    });
});


module.exports = router;