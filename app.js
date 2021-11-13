const express = require("express");

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MVC Pattern
// Model View Controller
const StudentRoutes = require("./routes/student");
app.use("/api/student", StudentRoutes);

app.listen(3000, () => {
  console.log("Express running on port 3000");
});
