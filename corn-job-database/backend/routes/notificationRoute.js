const express = require("express");
const router = express.Router();

const { getAllNotifications, subscribe, removeNotification, setSeenNotification } = require('../controllers/NotificationController');

router.get("/getAllNotifications", getAllNotifications);
router.post("/subscribe", subscribe);
router.post("/removeNotification", removeNotification);
router.post("/setSeenNotification", setSeenNotification);


module.exports = router;
