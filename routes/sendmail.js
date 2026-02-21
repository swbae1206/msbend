const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true, // 465 포트 또는 587 포트일 경우 true
    auth: {
      user: "swbae777",
      pass: "XC3LMDXPSEDE",
    },
  });
  

router.post("/", async (req, res) => {
  let { company, name, email, title, message } = req.body;
  
  console.log(company, name, email, title, message);
  
  message = message.replace(/\n/g, "<br>");
  
  try {

    const mailOptions = {
      from: "swbae777@naver.com",
      to: "swbae77@naver.com",
      subject: email + " 고객이 (주)엠에스밴드에 문의 메일을 보냈습니다.",
      html: `
        <div style="margin-bottom: 15px;"><p style="margin: 0;">${name}(${email})님이 제품 및 기술에 대해 아래와 같이 문의해 왔습니다.</p></div>
        <div style="display: grid; gap: 3px; width: 600px; box-sizing: border-box;">
          <div style="display: flex; gap: 0px; width: 100%; box-sizing: border-box;">
            <div style="padding: 8px 15px; background-color: #ddd; width: 100px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">회사</p>
            </div>
            <div  style="padding: 8px 15px; width: 500px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">${company}</p>
            </div>
          </div>
          <div style="display: flex; gap: 0px; width: 100%; box-sizing: border-box;">
            <div style="padding: 8px 15px; background-color: #ddd; width: 100px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">이름</p>
            </div>
            <div  style="padding: 8px 15px; width: 500px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">${name}</p>
            </div>
          </div>
          <div style="display: flex; gap: 0px; width: 100%; box-sizing: border-box;">
            <div style="padding: 8px 15px; background-color: #ddd; width: 100px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">이메일</p>
            </div>
            <div  style="padding: 8px 15px; width: 500px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">${email}</p>
            </div>
          </div>
          <div style="display: flex; gap: 0px; max-width: 100%; box-sizing: border-box;">
            <div style="padding: 8px 15px; background-color: #ddd; width: 100px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">제목</p>
            </div>
            <div  style="padding: 8px 15px; width: 500px; border: 1px solid #eee; text-wrap: wrap; box-sizing: border-box;">
              <p style="margin: 0;">${title}</p>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0px; max-width: 100%; box-sizing: border-box;">
            <div style="padding: 8px 15px; background-color: #ddd; width: 600px; border: 1px solid #eee; text-align: center; box-sizing: border-box;">
              <p style="margin: 0; width: 100%;">내용</p>
            </div>
            <div  style="padding: 8px 15px; width: 600px; border: 1px solid #eee; box-sizing: border-box;">
              <p style="margin: 0;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };
    
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

const checkSendMail = () => {

  const mailOptions = {
    from: "swbae777@naver.com",
    to: "swbae77@naver.com",
    subject: "(홈페이지 테스트 메일) '제품 및 기술문의' 기능의 테스트 메일입니다",
    html: `
      <div style="width: 600px; padding: 15px; border: 1px solid #ddd; background-color: #eee; border-radius: 5px;">
        <p style="margin: 0;">본 메일은 홈페이지의 "제품 및 기술문의" 기능이 정상적으로 작동하기 위해 20일 간격으로 자동 발송되는 테스트 메일입니다.<br>따라서 본 메일은 무시하여도 됩니다.</p>
      </div>
    `
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("check mail failed....")
      return
    }
    console.log("check mail successed....")
  });

}

module.exports = { sendmail: router, checkSendMail: checkSendMail };
