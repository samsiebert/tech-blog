const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I am commenting somethign very important.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Woah!!! THIS POST IS SO COOL!!!!!',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'yeah yeah yeah this is a comment',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'This is also a comment and you are reading it.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'COMMENT TEST',
    user_id: 2,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
