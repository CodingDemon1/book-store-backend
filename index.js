const express = require("express");
const { connection } = require("./config/db");
const { BookRouter } = require("./Routes/Books.Routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/book", BookRouter);

app.listen(9000, async () => {
	try {
		await connection();

		console.log("listening @ 9000");
	} catch (error) {
		console.log(error.message);
	}
});
