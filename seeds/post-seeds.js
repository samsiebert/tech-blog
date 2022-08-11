const { Post } = require('../models');

const postdata = [
  {
    title: 'TEST TITLE 1',
    post_url: 'https://test.com',
    user_id: 1
  },
  {
    title: 'TEST TITLE 2',
    post_url: 'https://test.com',
    user_id: 3
  },
  {
    title: 'TEST TITLE 3',
    post_url: 'https://test.com',
    user_id: 2
  },
  {
    title: 'TEST TITLE 4',
    post_url: 'https://test.com',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;