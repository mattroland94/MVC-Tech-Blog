const { Post } = require('../models');

const postsInfo = [
    {
        title: "mattroland94 Post",
        post_content: "I am the best coder",
        user_id: 1
    },
    {
        title: "simply Post",
        post_content: "I am the best streamer",
        user_id: 2
    },
    {
        title: "mizkif Post",
        post_content: "I am the best streamer",
        user_id: 3
    },
    {
        title: "kitboga Post",
        post_content: "I am the best streamer",
        user_id: 4
    }
];

const seedThePosts = () => Post.bulkCreate(postsInfo);
module.exports = seedThePosts;