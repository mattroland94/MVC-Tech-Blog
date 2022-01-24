const router = require('express').Router();
const userroutes = require('./user-routes.js');
const postroutes = require('./post-routes.js');
const commentroutes = require('./comment-routes.js');

router.use('/users', userroutes);
router.use('/posts', postroutes);
router.use('/comments', commentroutes);

module.exports = router;