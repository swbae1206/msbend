const sendMessage = document.querySelector(".sendMessage");

sendMessage.addEventListener("click", function () {
  const company = document.getElementById("company");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const title = document.getElementById("title");
  const message = document.getElementById("message");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    !company.value ||
    !name.value ||
    !email.value ||
    !title.value ||
    !message.value
  ) {
    alert("입력항목을 모두 채워주세요.");
    return;
  }

  if (!emailRegex.test(email.value)) {
    alert("정확한 email 주소를 입력하세요.")
    return
  }

  fetch("http://localhost:3500/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      company: company.value,
      name: name.value,
      email: email.value,
      title: title.value,
      message: message.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.result === "success") {
        alert("메시지 전송이 완료되었습니다");
        company.value = "";
        name.value = "";
        email.value = "";
        title.value = "";
        message.value = "";
      } else {
        alert("메시지 전송이 실패했습니다.\n다른 방법으로 시도하세요.");
      }
    });

})
