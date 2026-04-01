const { getAllMessages, insertMessage } = require("../db/queries");

const getMessages = async (req, res) => {
    try {
        const messages = await getAllMessages();
        res.render("layouts/index", {
            title: "Mini Messageboard",
            messages: messages,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading messages");
    }
};

const createMessage = async (req, res) => {
    try {
        const { name, message } = req.body;
        await insertMessage(name, message);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving message");
    }
};

module.exports = {
    getMessages,
    createMessage,
};
