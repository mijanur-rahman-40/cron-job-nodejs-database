const express = require("express");
const router = express.Router();

const { getAllNotifications, subscribe } = require('../controllers/NotificationController');

router.get("/getAllNotifications", getAllNotifications);
router.post("/subscribe", subscribe);


module.exports = router;
