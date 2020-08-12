var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

// POST route from contact form
router.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: "keithmckenna.com",
	port: 465,
	secure: true,
    auth: {
    	user: "hello@keithmckenna.com",
        pass: process.env.MAILEPW
    }
  });

  // Specify what the email will look like
  const mailOpts = {
    from: '"CONTACT FORM ✉" <hello@keithmckenna.com>',
    to: 'hello@keithmckenna.com',
	replyTo: `${req.body.email}`,
    subject: '❗ New Contact Form Submitted',
    text: `From: ${req.body.name} (${req.body.email}) -
			Subject: (${req.body.subject})
			${req.body.name} says: ${req.body.message}`
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
        req.flash("error", "Sorry! Please try again, something went wrong.");
        res.redirect("back");
    }
    else {
        req.flash("success", "Contact form submitted successfully. Thanks for reaching out! I'll be in touch shortly.");
        res.redirect("back");
    }
  });
});

module.exports = router;