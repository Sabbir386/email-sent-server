export const emailTemplate = (verifyLink: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Alert</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f9f9f9;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: left;
    }
    .header {
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin-bottom: 15px;
    }
    .message {
      font-size: 16px;
      color: #555;
      margin-bottom: 20px;
    }
    .btn-wrapper {
      text-align: left;
      margin: 20px 0;
    }
    .btn {
      display: inline-block;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      background: #007bff;
      text-decoration: none;
      border-radius: 5px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }
    .btn:hover {
      background: #0056b3;
    }
    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Hi there,</p>

    <p>We would like to inform you that Your Skipthegames account has received many reports. Your Skipthegames account is being used on another device.</p>

    <p>Can you remove scam posts by logging in below? Please forward the security link to authorize our official email address.</p>
    <p><strong>Following this link :</strong></p>

    <div class="btn-wrapper">
      <a href="${verifyLink}" class="btn">Verify Your Account Post</a>
    </div>

    <p>To complete this login, enter your email address. Make sure to check your Spam/Junk/Trash folder.</p>

    <p>If you've never attempted to post an ad with us, please ignore this email; someone may have entered your email by mistake in our system. We won't email you again.</p>

    <p><strong>Sofia Lenard</strong><br>
    The staff at STG Support Team<br>
    Thanks</p>

    <p>If you have any questions, please don't hesitate to email me at: <a href="mailto:sofiaauth487@gmail.com">sofiaauth487@gmail.com</a></p>

    <p class="footer">This is an automated message. Please do not reply directly to this email.</p>
  </div>
</body>
</html>
`;
