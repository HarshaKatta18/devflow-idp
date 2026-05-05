const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("DevFlow Node.js API is running 🚀");
});

// Users API
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Anita" }
  ];
  res.json(users);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});