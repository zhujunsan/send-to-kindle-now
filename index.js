const { json } = require("micro");
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const body = await json(req);
  const {
    HOST: host = "smtpdm.aliyun.com",
    USER: user,
    PASSWORD: password,
    FROM: from = user
  } = process.env;

  const { to, subject, text, attachments } = body;

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
