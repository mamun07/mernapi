import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const postModel = mongoose.model('post', postSchema);

export default postModel;
