import postModel from '../models/postModel.js';

// Get All Post Controllers
export const getallPost = async (req, res) => {
  try {
    const getallData = await postModel.find();
    if (getallData != null) {
      res.status(200).json(getallData);
    } else {
      res.status(409).json('Sorr!, Please create a new post');
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get Post Controllers
export const getPost = async (req, res) => {
  try {
    const getData = await postModel.findById(req.params.id);
    if (getData != null) {
      res.status(200).json(getData);
    } else {
      res.status(409).json('Post Not Found');
    }
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

// Update Post Controllers
export const updatePost = async (req, res) => {
  try {
    const updatePost = await postModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(201).json(updatePost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Post Controllers
export const deletePost = async (req, res) => {
  try {
    await postModel.findByIdAndDelete(req.params.id);
    res.status(201).json('Post has been deleted.');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
