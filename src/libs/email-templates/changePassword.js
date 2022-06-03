function changePassword(content) {
  return `<tr><td bgcolor="#ffffff" style="padding: 10px 5px 40px 5px;">
  <br/><br/>Dear <b>${content.user}</b>,<br/>
  <p>We received a request to update your password. The same has been changed accordingly. </p>
  <p><button style="width: 100%; margin-top: 50px; line-height: 30px; font-size: 16px; background: #FCA532; border-radius: 4px; font-weight: 600; cursor: pointer; border: 1px solid #FCA532;"><a href="${content.link}" style="text-decoration: none;color:white;">Click to sign in to Support Portal</a></button></p>
  <p>If you have not requested this change, please inform us via registered email on info@tss.net.com.<p/>`;
}

module.exports = {
  changePassword
};
