var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b502266b52284d",
      pass: "dcdfeea88764ce"
    }
  });

var mailOptions = {
  from: 'shoaibahmedgtk5@gmail.com',
  to: 'shoaibahmed.work@gmail.com',
  subject: 'Sending Email using Node.js',
  html: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Email Subject</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
  
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      }
  
      .header {
        background-color: #4CAF50;
        color: white;
        text-align: center;
        padding: 10px;
        border-radius: 10px 10px 0 0;
      }
  
      .content {
        padding: 20px;
      }
  
      .footer {
        background-color: #4CAF50;
        color: white;
        text-align: center;
        padding: 10px;
        border-radius: 0 0 10px 10px;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <div class="header">
        <h1>Congratulations!!!</h1>
      </div>
      <div class="content">
        <h2>Hello Ahmed,</h2>
        <p>Congratulations! boy! you have done it.This is the main content of your email. You can add your message, links, and other information here.</p>
        <p>Feel free to customize this template according to your needs.</p>
        <p>Best regards,<br>Binate digital </p>
      </div>
      <div class="footer">
        <p>&copy; 2023 Shoaib Company Right reserved!</p>
      </div>
    </div>
  </body>
  
  </html>
  `,
  attachments: [
    {
      filename: 'download.jfif',  // Name of the attached file
      path: 'C://Users//shoaib.ahmed//Desktop//download.jfif'  // Path to the file you want to attach
    }
    // Add more attachments if needed
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log("The errors ARe!",error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});