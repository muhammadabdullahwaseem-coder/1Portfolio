import React from "react";
import ChatAssistant from "../ChatAssistant/ChatAssistant";
import WhatsAppBubble from "../WhatsAppBubble/WhatsAppBubble";
import EmailBubble from "../EmailBubble/EmailBubble";
import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <div className="floating-buttons-wrapper" id="floating-buttons">
      {/* Email Floating Button */}
      <EmailBubble />
      {/* WhatsApp Floating Button */}
      <WhatsAppBubble />
      {/* Chatbot FAB at the bottom */}
      <ChatAssistant />
    </div>
  );
}

export default FloatingButtons;
