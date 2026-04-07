import React from "react";
import ChatAssistant from "../ChatAssistant/ChatAssistant";
import WhatsAppBubble from "../WhatsAppBubble/WhatsAppBubble";
import "./FloatingButtons.css";

function FloatingButtons() {
  return (
    <div className="floating-buttons-wrapper" id="floating-buttons">
      {/* WhatsApp sits ABOVE the chatbot */}
      <WhatsAppBubble />
      {/* Chatbot FAB at the bottom */}
      <ChatAssistant />
    </div>
  );
}

export default FloatingButtons;
