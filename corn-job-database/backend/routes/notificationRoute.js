const express = require("express");
const router = express.Router();

const { getAllNotifications } = require('../controllers/NotificationController');

router.get("/getAllNotifications", getAllNotifications);


module.exports = router;
