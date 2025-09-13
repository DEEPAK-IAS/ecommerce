import sendEmail from "./emailService.js";

const sendEmailFun = async ({to, subject, text, html}) => {

  const result = sendEmail(to, subject, text, html);
  if (result.success) {
    return true;
  } else {
    return false;
  }
};

export default sendEmailFun;
