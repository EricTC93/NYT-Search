// Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
    	trim: true,
		unique: true,
		required: true
	},

	url: {
		type: String,
		trim: true,
		required: true
	},

	date: {
		type: Date,
		required: true
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;