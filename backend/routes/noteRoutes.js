const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes } = require("../controlles/noteController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes);

module.exports = router;
