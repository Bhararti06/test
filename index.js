const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.get("/tasks", async (req, res) => {
	try {
		const response = await axios({
			url: "https://jsonplaceholder.typicode.com/posts",
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

app.get("/tasks/:id", async (req, res) => {

	try {
		const response = await axios({
		url: `https://jsonplaceholder.typicode.com/posts/${req.params.id}`,
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});
app.listen(5000, () => {
	console.log("Server commit UPDATE  started at port 5000");
});
