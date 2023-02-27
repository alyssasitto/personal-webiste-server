const router = require("express").Router();

const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
	const { name, email, message } = req.body;

	if (name === "" || email === "" || message === "") {
		return res
			.status(400)
			.json({ err: "Please enter a name, email, and message" });
	}

	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ err: "Please enter a valid email" });
	}

	const contactEmail = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const mailOptions = {
		from: email,
		to: process.env.EMAIL,
		subject: `Message from name: ${name}, email: ${email}`,
		text: message,
	};

	contactEmail.sendMail(mailOptions, (err) => {
		if (err) {
			res.status(400).json({ err: "Could not send message" });
		} else {
			res.status(200).json({ message: "Message sent! Thank you" });
		}
	});
});

module.exports = router;
