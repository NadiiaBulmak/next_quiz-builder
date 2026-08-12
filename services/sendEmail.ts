import nodemailer from 'nodemailer';
import type { Options } from 'nodemailer/lib/mailer';

export const buildEmailContent = (token: string): string => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
  return `
    <p>You requested a password reset. Click the link below to reset your password:</p>
    <a href="${resetUrl}">Reset Password</a>
  `;
};

// 1. Define the asynchronous email sender function
export async function sendMail({
  to,
  content,
}: {
  to: string;
  content: string;
}): Promise<void> {
  // 2. Configure the SMTP transporter
  console.log(process.env.EMAIL_USER);
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  // 3. Define the email options using the built-in Options type
  const mailOptions: Options = {
    from: process.env.EMAIL_SENDER,
    to,
    subject: 'QuizFlow - reset your password',
    html: content,
  };

  try {
    // 4. Send the email and capture the response
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
