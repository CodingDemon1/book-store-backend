const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
	Title: String,
	Author: String,
	Genre: String,
	Description: String,
	Price: Number,
});

const BookModel = mongoose.model("book", BookSchema);

module.exports = { BookModel };
