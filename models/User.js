const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	wallet: {
		type: String,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	telegram: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = User = mongoose.model("users", UserSchema);
