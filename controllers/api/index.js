const router = require = require('express').Router();
const userroutes = require('./user-routes');
const postroutes = require('./post-routes');
const commentroutes = require('./comment-routes');

router.use('/users', userroutes);
router.use('/posts', postroutes);
router.use('/comments', commentroutes);

module.exports = router;