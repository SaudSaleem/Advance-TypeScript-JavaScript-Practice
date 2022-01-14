const cron = require("node-cron");
const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  // host: 'smtp.ethereal.email',
  service: "gmail",
  auth: {
    user: "saud.saleem@invozone.com",
    pass: "sjzmjpsdevstmkun",
  },
});

// function sendEmail(message) {
//   transporter
//     .sendMail({
//       from: '"Saud" <saud.saleem@invozone.com>',
//       to: '"You there" <saudsaleem6@gmail.com>',
//       subject: "Scheduled Email",
//       text: message,
//     })
//     .then((_) => {
//       console.log("Email sent on " + new Date());
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

//return all users with bank account details
const sendEmailToUser = (req, res) => {
  cron.schedule("*/2 * * * *", () => {
    transporter.sendMail({
      from: '"Saud" <saud.saleem@invozone.com>',
      to: '"You there" <saudsaleem6@gmail.com>',
      subject: "Scheduled Email",
      text: "hello brotheeee",
    });
  });
  res.status(200).send("job started");
};

module.exports = {
  sendEmailToUser,
};
