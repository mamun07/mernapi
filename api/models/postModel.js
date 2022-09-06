import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  message: {
    type: String,
  },
  creator: {
    type: String,
  },
  tag: {
    type: [String],
  },
  selectedFile: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const postModel = mongoose.model('post', postSchema);

export default postModel;
