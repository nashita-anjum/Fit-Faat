const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.get("/root", (req, res) => {
  res.json({ message: "Hello World!" });
});


app.listen(3000, () => console.log("Server started on port 3000"));