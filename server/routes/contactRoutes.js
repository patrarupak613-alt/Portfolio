const express = require("express");

const router = express.Router();

const pool = require("../config/db");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, message } = req.body;

    await pool.query(
      "INSERT INTO messages(name, email, message) VALUES($1, $2, $3)",
      [name, email, message]
    );

    res.status(200).json({
      message: "Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;