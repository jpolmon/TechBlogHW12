const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.use(withAuth);

router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.patch('/edit/:id', async (req, res) => {
  try {
    const editedPost = await Post.findByPk(req.body.post_id);
    editedPost.name = req.body.title;
    editedPost.content = req.body.content;
    await editedPost.save({ fields: ['name', 'content'] });
    res.status(200).json(editedPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
