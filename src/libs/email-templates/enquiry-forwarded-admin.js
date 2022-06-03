function enquiryAdmin(content) {
  return `<tr><td bgcolor="#ffffff" style="padding: 10px 5px 40px 5px;">
<p>Dear Admin</p>
<p>Enquiry received details are as follows</p>
<table>
<colgroup>
    <col style="width:20%">
    <col style="width:30%">
  </colgroup>  
  <tbody>
<tr><td>Date & Time</td><td>${content.timstamp}</td></tr>
<tr><td>Request Type</td><td>${content.type}</td></tr>
<tr><td>From</td><td>${content.user}</td></tr>
<tr><td>Email</td><td>${content.email}</td></tr>
${content.child ? "<tr><td>Child</td><td>" + content.child + "</td></tr>" : ""}
${
  content.subject
    ? "<tr><td>Subject</td><td>" + content.subject + "</td></tr>"
    : ""
}
${content.level ? "<tr><td>Level</td><td>" + content.level + "</td></tr>" : ""}
<tr><td>Query</td><td>${content.query}</td></tr>
</tbody></table>
`;
}

module.exports = {
  enquiryAdmin,
};
