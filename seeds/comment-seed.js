const { Comment } = require('../models');

const commentsInfo = [
    {
        comment_text: "mattroland94, you are so cool!",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "simply, no, you are cooler!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Kit, what happened to simply?",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "mizkif, he got covid!",
        user_id: 4,
        post_id: 3
    }
];

const seedTheComments = () => Comment.bulkCreate(commentsInfo);
module.exports = seedTheComments;