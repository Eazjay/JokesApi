const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "SetUp is required."],
		minLength: [5, "SetUp content must be at least 5 characters long "]
	},
	punchline: {
		type: String,
		required: [true, "Punchline is required."],
		minLength: [5, "punchline must be at least 5 characters long"]
	}
}, {timestamps:true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;