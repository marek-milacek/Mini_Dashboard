const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const path = require("node:path");
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/indexRouter"));
app.use("/new", require("./routes/newRouter"));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
