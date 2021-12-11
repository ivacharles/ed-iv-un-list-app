const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post } = db;

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


router.get('/:category', (req,res) => {
  Post.findAll({
    where:{
      category: req.params.category
    },
    attributes:['title','zipcode','city','description'],
  })
    .then(posts => res.json(posts));
});
router.get('/', (req,res) => {
  Post.findAll({})
    .then(posts => res.json(posts));
});


router.post('/', (req, res) => {
  const posts = {
    userid:req.body.userid,
    title: req.body.title,
    city: req.body.city,
    img:req.body.img,
    zipcode:req.body.zipcode,
    category:req.body.category,
    price:req.body.price,
    make:req.body.make,
    modelname:req.body.modelname,
    contact_email:req.body.contact_email,
    description: req.body.description

  };
  Post.create(posts)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});





router.put('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }
      //userid,title,city,img,zipcode,category,price,make,modelname, contact_email, description
      post.userid = req.body.userid;
      post.title = req.body.title;
      post.city = req.body.city;
      post.img = req.file.img;
      post.zipcode = req.body.zipcode;
      post.category = req.body.category;
      post.price = req.body.price;
      post.make = req.body.make;
      post.modelname = req.body.modelname;
      post.contact_email = req.body.contact_email;
      post.description = req.body.description;
      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});




// router.put('/:category', (req, res) => {
//   const { category} = req.params;
//   Post.findByPk(category)
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }
//       //userid,title,city,img,zipcode,category,price,make,modelname, contact_email, description=
//       post.title = req.body.title;
//       post.city = req.body.city;
//       post.img = req.file.buffer;
//       post.zipcode = req.body.zipcode;
//       post.price = req.body.price;
//       post.make = req.body.make;
//       post.modelname = req.body.modelname;
//       post.contact_email = req.body.contact_email;
//       post.description = req.body.description;
//       post.save()
//         .then(post => {
//           res.json(post);
//         })
//         .catch(err => {
//           res.status(400).json(err);
//         });
//     });
// });


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
