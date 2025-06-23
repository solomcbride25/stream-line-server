const Review = require("../models/reviewModel");

const createReview = async (req, res, next) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const readReview = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const readReviewById = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedReview)
      return res.status(404).json({ error: "Review not found" });
    res.json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ error: "Review not found" });
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createReview,
  readReview,
  readReviewById,
  updateReview,
  deleteReview,
};
