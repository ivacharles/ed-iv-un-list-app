const express = require('express');
const router = express.Router();


<<<<<<< HEAD
const postsController = require('./posts.js');
 const usersController = require('./users.js');
const appConfigController = require('./appConfig.js');
const categoriesController = require('./categories.js');
// Load each controller
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/categories', categoriesController);
router.use('/users', usersController);
router.use('/application-configuration', appConfigController);

=======
// Load each controller
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);


>>>>>>> 8771af42d3193f9180fc3b8096dde86e5dabd066
module.exports = router;