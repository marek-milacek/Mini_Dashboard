const { Router } = require("express");
const { createMessage } = require("../controllers/usersController");
const router = Router();

router.get("/", (req, res) => {
    res.render("layouts/new", {
        title: "New Message",
    });
});

router.post("/", createMessage);

module.exports = router;
