const express = require("express");

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MVC Pattern
// Model View Controller
const StudentRoutes = require("./routes/student");
app.use("/api/student", StudentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express running on port", PORT);
});
