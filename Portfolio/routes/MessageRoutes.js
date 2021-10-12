const express = require("express");

const MessageController = require("../controllers/MessageController");

const router = express.Router();

router.post("/", MessageController.addMessage);
router.get("/", MessageController.getAllMessages);
router.put("/:messageId", MessageController.updateMessage);

module.exports = router;