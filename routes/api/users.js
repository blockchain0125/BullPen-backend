const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../../models/User");

router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
	User.find().then((user) => {
		if (!user) return res.json({ msg: "There is no User" });
		else {
			User.find()
				.then((user) => res.json(user))
				.catch((err) => res.json(err));
		}
	});
});

router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
	User.findOne({ wallet: req.body.wallet }).then((user) => {
		if (user) return res.status(400).json({ wallet: "Wallet already exists" });
		else {
			const newUser = new User(req.body);
			newUser
				.save()
				.then((user) => res.json(user))
				.catch((err) => console.log(err));
		}
	});
});

router.post("/update", passport.authenticate("jwt", { session: false }), (req, res) => {
	console.log(req);
});

router.post("/del", passport.authenticate("jwt", { session: false }), (req, res) => {
	console.log(req);
});

module.exports = router;
