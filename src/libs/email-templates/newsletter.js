function newsletter(content) {
  return `<tr><td bgcolor="#ffffff" style="padding: 10px 5px 40px 5px;">
  <center><h1>Newsletters</h1></center>
  <br/><br/>Hi <b>${content.user}</b>,<br/>
<p>
Thank you for subscribing to BrainGymJr. For the latest news on BrainGymJr.and its activities we are sharing the newsletter for the month of <b>${content.month}</b>. Hope you find it useful.</p>
<p>Assuring you of our best service always.</p>
<h4>Best Regards.</h4>`;
}

module.exports = {
  newsletter,
};
