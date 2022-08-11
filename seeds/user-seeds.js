const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'user1',
    email: 'user1@test.com',
    password: 'password123'
  },
  {
    username: 'guy2',
    email: 'guy2@test.com',
    password: 'password123'
  },
  {
    username: 'person3',
    email: 'person3@test.com',
    password: 'password123'
  },
  {
    username: 'entity4',
    email: 'entity4@test.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;