import { emailType } from "@Entities/types/userTypes";
import nodemail from "nodemailer";

export const sendEmailHelper = async (email: emailType, tokenPassword: any) => {
  const link = process.env.LINK + tokenPassword;

  var transporter = nodemail.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  var mailOptions = {
    from: process.env.EMAILFROM,
    to: email,
    subject: "Your code to reset password",
    html: `
    <table border="0" width="390" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
    <tbody>
      <tr>
        <td style="border-collapse:collapse;border-radius:3px;text-align:center;display:block;border:solid 1px #009fdf;padding:10px 16px 14px 16px;margin:0 2px 0 auto;min-width:80px;background-color:#47a2ea">
          <a href="${link}" style="color:#1b74e4;text-decoration:none;display:block" target="_blank">
            <center>
              <font size="3" style="font-family:Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;white-space:nowrap;font-weight:bold;vertical-align:middle;color:#fdfdfd;font-size:16px;line-height:16px">
                Redefina sua senha
              </font>
            </center>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    }
    return { info, link };
  });
};
