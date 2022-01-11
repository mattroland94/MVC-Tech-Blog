const { User } = require("../models");

const usersInfo = [
    {
        username: "mattroland94",
        email: "mattroland94@gmail.com",
        password: "mattroland94"
    },
    {
        username: "simply",
        email: "simply@simply.com",
        password: "simply"
    },
    {
        username: "mizkif",
        email: "mizkif@mizkif.com",
        password: "mizkif"
    },
    {
        username: "kitboga",
        email: "kitboga@kitboga.com",
        password: "kitboga"
    }
];

const seedTheUsers = () => User.bulkCreate(usersInfo);
module.exports = seedTheUsers;