const { Post } = require('../models');

const postdata = [
  {
    title: 'TEST TITLE 1',
    post_text: 'loremd jlabfdjbajka ',
    user_id: 1
  },
  {
    title: 'TEST TITLE 2',
    post_text: 'bfidohnaoigfngioehnioghrfeopaj',
    user_id: 3
  },
  {
    title: 'TEST TITLE 3',
    post_text: 'fbduigavboihnapo neopvhnpaeewa',
    user_id: 2
  },
  {
    title: 'TEST TITLE 4',
    post_text: 'fj0-ejwvpojfnoiubrohaiow',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;