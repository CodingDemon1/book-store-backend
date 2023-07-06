const { BookModel } = require("../models/BooksModel");

const BookRouter = require("express").Router();

BookRouter.get("/", async (req, res) => {
	try {
		const { genre, sort, order } = req.query;

		console.log(genre, sort, order);
		if (!genre && !sort) {
			const AllBooks = await BookModel.find();
			res.status(200).json(AllBooks);
		} else {
			if (!sort) {
				const AllBooks = await BookModel.find({ Genre: genre });
				res.status(200).json(AllBooks);
			} else if (!genre) {
				const AllBooks = await BookModel.find(
					{},
					["Title", "Description", "Genre", "Price", "Author"],
					{
						sort: {
							Price: order === "asc" ? 1 : -1,
						},
					}
				);
				res.status(200).json(AllBooks);
			} else {
				const AllBooks = await BookModel.find(
					{ Genre: genre },
					["Title", "Description", "Genre", "Price", "Author"],
					{
						sort: {
							Price: order === "asc" ? 1 : -1,
						},
					}
				);
				res.status(200).json(AllBooks);
			}
		}
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
});
BookRouter.post("/add", async (req, res) => {
	try {
		const { Title, Description, Genre, Price, Author } = req.body;

		const newBook = new BookModel({
			Title,
			Description,
			Genre,
			Price,
			Author,
		});
		await newBook.save();

		res.status(200).json({ msg: "Book added Successfully" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
});

BookRouter.put("/:id", async (req, res) => {});

BookRouter.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const book = await BookModel.findOne({ _id: id });

		if (!book) {
			return res.status(400).json({ msg: "Not Found" });
		}

		const deleted = await BookModel.deleteOne({ _id: id });

		res.status(200).json({ msg: "Book Deleted Successfully" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
});

module.exports = { BookRouter };
