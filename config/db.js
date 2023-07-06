const mongoose = require("mongoose");

require("dotenv").config();

const connection = async () => {
	try {
		await mongoose.connect(process.env.mongoURL);
		console.log("Connected to Database");
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { connection };
