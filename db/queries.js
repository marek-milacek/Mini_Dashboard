const pool = require("./pool");

const getAllMessages = async () => {
    try {
        const res = await pool.query(
            "SELECT username, message, created_at FROM messages ORDER BY created_at DESC",
        );
        return res.rows.map((row) => ({
            text: row.message,
            user: row.username,
            added: row.created_at,
        }));
    } catch (err) {
        console.error(err.message);
    }
};

const insertMessage = async (username, message) => {
    try {
        const res = await pool.query(
            "INSERT INTO messages (username, message) VALUES ($1, $2) RETURNING *",
            [username, message],
        );
        return res.rows[0];
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = {
    getAllMessages,
    insertMessage,
};
