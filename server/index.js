const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const quizObject = require("./quizgame");

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.post("/api/quiz", async (req, res) => {
  const quizTopic = await req.body.topic;
  quizObject.map((category) => {
    if (category.topic === quizTopic) {
      res.status(201).json({ category });
    }
  });
});

app.listen(process.env.Port || 5000, () => {
  console.log("listening to port" + " " + process.env.Port);
});
