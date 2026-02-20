const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! This is Omair Durrani’s Web Programming II app – Version 2");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});