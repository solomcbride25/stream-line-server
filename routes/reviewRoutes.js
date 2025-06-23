const express = require('express');
const router = express.Router();
const Review = require("../models/Review");
const { default: mongoose } = require('mongoose');

//create review
router.post("/", async (req, res) => {
    try{
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        res.status(201).json(savedReview)
    } catch (error) {
        res.status(400).json({error: err.message});
    }
});

// read reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// read one review
router.get("/:id", async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({error: "Review not found"});
        res.json(review);
    } catch (error) {
        res.status(500).json({error: err.message});
    }
});

//update review by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if (!updatedReview) return res.status(404).json({error: "Review not found"});
        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
})

// delete review by ID
router.delete("/:id"), async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({error: "Review not found"});
        res.json({message: "Review deleted successfully"});
    } catch (error) {
        res.status(500).json({error: err.message});
    }
};

module.exports = router;


