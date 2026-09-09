import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./EmailBubble.css";

const GMAIL_ADDRESS = "muhammadabdullah121254@gmail.com";

function EmailBubble() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`mailto:${GMAIL_ADDRESS}?subject=${encodeURIComponent("Project Inquiry / Discovery")}&body=${encodeURIComponent("Hi Abdullah,\n\nI'm reaching out regarding a project...")}`}
      className={`email-bubble ${hovered ? "email-bubble--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Send Email Inquiry"
      title="Send Email (muhammadabdullah121254@gmail.com)"
    >
      <AiOutlineMail style={{ fontSize: "26px" }} />
      <span className="email-pulse"></span>
    </a>
  );
}

export default EmailBubble;
