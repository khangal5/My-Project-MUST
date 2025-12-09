import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB холболт
mongoose
  .connect("mongodb+srv://USER:PASS@cluster.mongodb.net/monuments")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Schema
const MonumentSchema = new mongoose.Schema({
  name: String,
  location: String,
  era: String,
  description: String,
});

const Monument = mongoose.model("Monument", MonumentSchema);

// API – бүх дурсгал авах
app.get("/monuments", async (req, res) => {
  const data = await Monument.find();
  res.json(data);
});

// Тодорхой дурсгал авах
app.get("/monuments/:id", async (req, res) => {
  const item = await Monument.findById(req.params.id);
  res.json(item);
});

app.listen(5000, () => console.log("Server running on 5000"));
