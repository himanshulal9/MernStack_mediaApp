import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//aditional local imports
import postRoutes from "./routes/posts.js";

const app = express();

//using express middlewares
app.use("/posts", postRoutes);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongo Db connection
const CONNECTION_URL =
  "mongodb+srv://greatcoders:9852014783@cluster0.g1u6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`app is running on ${PORT}`)))
  .catch((e) => console.log("error", e.message));

mongoose.set("useFindAndModify", false);
