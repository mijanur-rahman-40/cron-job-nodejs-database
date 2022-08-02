const express = require("express");
const router = express.Router();

const { getAllNotifications, subscribe, removeNotification } = require('../controllers/NotificationController');

router.get("/getAllNotifications", getAllNotifications);
router.post("/subscribe", subscribe);
router.post("/removeNotification", removeNotification);


module.exports = router;
