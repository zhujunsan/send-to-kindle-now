const { json } = require("micro");
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const body = await json(req);
  const {
    host = "smtpdm.aliyun.com",
    user,
    password,
    from,
    to,
    subject,
    text,
    attachments
  } = body;

  const transporter = nodemailer.createTransport({
    host,
    port: 80,
    secureConnection: false,
    auth: {
      user,
      pass: password // password
    }
  });
  const mailOptions = {
    from,
    to,
    subject,
    text,
    attachments
  };
  await transporter.sendMail(mailOptions);
  res.end(`success`);
};
