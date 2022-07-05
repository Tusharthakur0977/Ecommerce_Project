// function to send email using nodeMailer

const nodeMailer = require("nodemailer");

// options = email,message and subject from userController
const sendEmail = async (options) => {
  //details of the sender
  const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE, // name of service
    host: process.env.SMTP_HOST, // host for seding service like gmail
    port: process.env.SMTP_PORT, // port of sending service
    auth: {
      secure: true,
      user: process.env.SMTP_MAIL, // email ID of Sender
      pass: process.env.SMTP_PASSWORD, //password of sender email ID
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL, 
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions); //nodeMailer function to send Mail
};

module.exports = sendEmail;
