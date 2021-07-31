import mogoose from "mongoose";

//creating post scheme.
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//creating post Modal
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
