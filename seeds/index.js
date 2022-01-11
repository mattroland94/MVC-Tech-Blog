const seedThePosts = require('./post-seed');
const seedTheUsers = require('./user-seed');
const seedTheComments = require('./comment-seed');

const sequelize = require('../config/connection');

const seedTheDatabase = async() => {
    await sequelize.sync({ force: true });
    await seedTheUsers();
    await seedThePosts();
    await seedTheComments();

    process.exit(0);
}

seedTheDatabase();