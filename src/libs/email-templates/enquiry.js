function enquiry(content) {
  return `<tr><td bgcolor="#ffffff" style="padding: 10px 5px 40px 5px;">
<p>Dear <b>${content.user}</b></p>
<br/><br/>
<p>Thank you for getting in touch. We have received your communication and will get back to you within 24 hours between Monday – Friday. </p>`;
}

module.exports = {
  enquiry,
};
