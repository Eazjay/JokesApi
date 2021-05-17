const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (request, response) => {
    Jokes.find()
        .then(allJokes => response.json({ Jokes: allJokes }))
        .catch(err => response.json({ message: "Something went wrong", error: err }));
};
module.exports.findOneJoke = (request, response) => {
	Jokes.findOne({ _id: request.params.id })
		.then(oneJoke => response.json({ Joke: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.createNewJoke = (request, response) => {
    Jokes.create(request.body)
        .then(newJoke => response.json({ Joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.updateJoke = (request, response) => {
    Jokes.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedJoke => response.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deleteJoke = (request, response) => {
    Jokes.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};