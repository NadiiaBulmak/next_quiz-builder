import nodemailer from 'nodemailer';
import type { Options } from 'nodemailer/lib/mailer';
import path from 'path';

const LOGO_CID = 'quizflow-logo';

export const buildEmailContent = (token: string): string => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />

  <title>Reset your password</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f7f7f3;
    font-family: Arial, Helvetica, sans-serif;
    color: #3f3f3b;
  "
>
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      width: 100%;
      background-color: #f7f7f3;
      padding: 48px 20px;
    "
  >
    <tr>
      <td align="center">

        <!-- Email card -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 560px;
            background-color: #ffffff;
            border: 1px solid #e9e9e4;
            border-radius: 20px;
            overflow: hidden;
          "
        >

          <!-- Logo -->
          <tr>
            <td
              align="center"
              style="
                padding: 32px 36px 24px;
              "
            >
              <img
                src="cid:${LOGO_CID}"
                alt="Quiz Builder"
                width="150"
                style="
                  display: block;
                  width: 150px;
                  max-width: 150px;
                  height: auto;
                  border: 0;
                "
              />
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td
              align="center"
              style="
                padding: 28px 40px 44px;
              "
            >

              <!-- Accent -->
              <div
                style="
                  width: 42px;
                  height: 4px;
                  background-color: #b6f000;
                  border-radius: 10px;
                  margin-bottom: 24px;
                "
              ></div>

              <!-- Eyebrow -->
              <p
                style="
                  margin: 0 0 12px;
                  font-size: 11px;
                  line-height: 16px;
                  font-weight: 700;
                  letter-spacing: 1.4px;
                  text-transform: uppercase;
                  color: #8aa51d;
                "
              >
                Password reset
              </p>

              <!-- Heading -->
              <h1
                style="
                  margin: 0 0 18px;
                  font-size: 30px;
                  line-height: 38px;
                  font-weight: 700;
                  letter-spacing: -0.6px;
                  color: #3f3f3b;
                "
              >
                Reset your password
              </h1>

              <!-- Description -->
              <p
                style="
                  max-width: 420px;
                  margin: 0 auto 30px;
                  font-size: 14px;
                  line-height: 23px;
                  color: #777771;
                "
              >
                We received a request to reset your password.
                Click the button below to choose a new password
                and get back to your quizzes.
              </p>

              <!-- CTA -->
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  margin: 0 auto 30px;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="
                      background-color: #b6f000;
                      border-radius: 9px;
                    "
                  >
                    <a
                      href="${resetUrl}"
                      target="_blank"
                      style="
                        display: inline-block;
                        padding: 13px 24px;
                        font-size: 14px;
                        line-height: 20px;
                        font-weight: 700;
                        color: black;
                        text-decoration: none;
                        border-radius: 9px;
                      "
                    >
                      Reset password
                      &nbsp;→
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Security notice -->
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  max-width: 420px;
                  background-color: #fafaf7;
                  border: 1px solid #eeeeea;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    align="left"
                    style="
                      padding: 16px 18px;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 4px;
                        font-size: 12px;
                        line-height: 18px;
                        font-weight: 700;
                        color: #555550;
                      "
                    >
                      Didn't request a password reset?
                    </p>

                    <p
                      style="
                        margin: 0;
                        font-size: 12px;
                        line-height: 18px;
                        color: #999991;
                      "
                    >
                      No action is required. Your password will
                      remain unchanged.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Fallback URL -->
              <p
                style="
                  max-width: 420px;
                  margin: 28px auto 7px;
                  text-align: left;
                  font-size: 11px;
                  line-height: 17px;
                  color: #aaa9a1;
                "
              >
                If the button doesn't work, copy and paste this
                link into your browser:
              </p>

              <p
                style="
                  max-width: 420px;
                  margin: 0 auto;
                  text-align: left;
                  font-size: 11px;
                  line-height: 17px;
                  word-break: break-all;
                "
              >
                <a
                  href="${resetUrl}"
                  target="_blank"
                  style="
                    color: #8aa51d;
                    text-decoration: underline;
                  "
                >
                  ${resetUrl}
                </a>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                padding: 20px 36px;
                border-top: 1px solid #eeeeea;
                background-color: #ffffff;
              "
            >
              <p
                style="
                  margin: 0;
                  font-size: 10px;
                  line-height: 16px;
                  color: #b0afa8;
                "
              >
                © ${new Date().getFullYear()} Quiz Builder
              </p>
            </td>
          </tr>

        </table>

        <!-- Outside card -->
        <p
          style="
            margin: 18px 0 0;
            font-size: 10px;
            line-height: 16px;
            color: #b5b4ad;
            text-align: center;
          "
        >
          This is an automated message. Please do not reply.
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
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
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(process.cwd(), 'public', 'logo.png'),
        cid: LOGO_CID,
        contentType: 'image/png',
      },
    ],
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
