//5.
const path = require("path");

const unitEnum = {
	vnd: "vnd",
};

// create a JSON object
const books = {
	id: 1,
	name: "Javascript",
	ISBN: "978-3-16-148410-0",
	price: 100,
	unit: unitEnum.vnd,
};

// convert JSON object to a string
const data = JSON.stringify(books);

// write JSON string to a file
const fs = require("fs");
fs.writeFile(path.join(__dirname, "book.json"), data, (err) => {
	if (err) {
		throw err;
	}
	console.log("JSON data is saved.");
});
