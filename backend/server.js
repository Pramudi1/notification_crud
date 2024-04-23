const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const noticeRoutes = require("./routes/notification.route");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://root:root@cluster0.zekgg7g.mongodb.net/teacher_crud"
);

// Use Routes
app.use("/api", noticeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
