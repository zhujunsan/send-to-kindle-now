var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "smtpdm.aliyun.com",
  port: 80,
  secureConnection: false,
  auth: {
    user: "", // user name
    pass: "" // password
  }
});

var mailOptions = {
  from: "",
  to: "",
  subject: "Hello",
  text: "Hello world",
  attachments: [
    {
      filename: "text0.txt",
      content: "hello world!"
    }
  ]
};
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: " + info.response);
});
