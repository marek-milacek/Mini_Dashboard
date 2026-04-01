const { Router } = require("express");
const { getMessages } = require("../controllers/usersController");
const router = Router();

router.get("/", getMessages);

module.exports = router;
