const express = require('express');
const router = express.Router();


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

module.exports = router;