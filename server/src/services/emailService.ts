import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password",
  },
});

export const sendEmail = async (to: string, message: string) => {
  await transporter.sendMail({
    from: "FutureMe AI",
    to,
    subject: "📩 Your Message from the Past",
    text: message,
  });
};
