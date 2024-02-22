import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_NAME,
    pass: process.env.NODE_MAILER_PASS,
  },
});

transporter.verify().then(() => {
  console.log("Ready for send emails");
});

export const sendEmail = async (email) => {
  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.NODE_MAILER_NAME, // sender address
    to: email, // list of receivers
    subject: "Registro de Spotter", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};
