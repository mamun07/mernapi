import postModel from '../models/postModel.js';

// Get Post Controllers
export const getPost = async (req, res) => {
  try {
    const postData = await postModel.find();
    res.status(200).json(postData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Create Post Controllers
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postModel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
