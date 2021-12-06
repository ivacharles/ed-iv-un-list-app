const express = require('express');
const router = express.Router();
const db = require('../models');
const {User} = db;

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
  User.findAll({})
    .then(users => res.json(users));
});


router.post('/', (req, res) => {
  let { first_name,last_name,email,password,zip,city } = req.body;
  
  User.create({ first_name,last_name,email,password,zip,city })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }
      res.json(user);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }
      first_name,last_name,email,password,zip,city   
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.zip = req.body.zip;
      user.city = req.body.city;
      user.save()
        .then(user => {
          res.json(user);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;