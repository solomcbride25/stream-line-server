const express = require("express");
const router = express.Router();

const {
  createReview,
  readReview,
  updateReview,
  deleteReview,
  readReviewById,
} = require("../controllers/reviewController");

//create review
router.post("/", createReview);

// read reviews
router.get("/", readReview);

// read one review
router.get("/:id", readReviewById);

//update review by ID
router.put("/:id", updateReview);

// delete review by ID
router.delete("/:id", deleteReview);

module.exports = router;
