const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost/crudtest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));