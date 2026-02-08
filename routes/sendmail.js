const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  let { company, name, email, title, message } = req.body;

  console.log(company, name, email, title, message);

  message = message.replace(/\n/g, "<br>");
  
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true, // 465 포트 또는 587 포트일 경우 true
    auth: {
      user: "swbae77",
      pass: "1R95DZSGQ9SF",
    },
  });
    
  const mailOptions = {
    from: "swbae77@naver.com",
    to: "swbae77@naver.com",
    subject: email + " 고객이 (주)엠에스밴드에 문의 메일을 보냈습니다.",
    html: `
      <div>
        <div style="display: flex; gap: 15px;">
          <p style="margin: 0; width: 100px;">회사</p>
          <p style="margin: 0;">: ${company}</p>
        </div>
        <div style="display: flex; gap: 15px;">
          <p style="margin: 0; width: 100px;">이름</p>
          <p style="margin: 0;">: ${name}</p>
        </div>
        <div style="display: flex; gap: 15px;">
          <p style="margin: 0; width: 100px;">이메일</p>
          <p style="margin: 0;">: ${email}</p>
        </div>
        <div style="display: flex; gap: 15px;">
          <p style="margin: 0; width: 100px;">제목</p>
          <p style="margin: 0;">: ${title}</p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0px;">
          <p style="margin-top: 10px; width: 100px;">내용 :</p>
          <p style="margin: 0px;">${message}</p>
        </div>
      </div>
    `,
  };
    
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({ result: "fail" });
      }
      res.send({ result: "success" });
    });
  } catch (err) {
    res.send({ result: "fail" });
  }
  
})

module.exports = router;
