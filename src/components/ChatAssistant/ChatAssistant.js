import React, { useState, useRef, useEffect, useCallback } from "react";
import { BsChatDotsFill, BsXLg, BsSendFill } from "react-icons/bs";
import { RiRobot2Fill } from "react-icons/ri";
import "./ChatAssistant.css";

// ─── FAQ Responses (Knowledge Base) ────────────────────────
const FAQ = {
  pricing:
    "Here's a quick overview of my pricing:\n\n" +
    "🌐 Web Development — Starting PKR 25,000\n" +
    "  • Landing page / portfolio: PKR 25K\n" +
    "  • Multi-page business site: PKR 45K+\n" +
    "  • Full web app / dashboard: PKR 80K+\n" +
    "  • Includes SEO, mobile-first design, 1 month free support\n\n" +
    "📱 Mobile Apps — Starting PKR 60,000 (Most popular!)\n" +
    "  • Cross-platform iOS + Android (React Native / Flutter)\n" +
    "  • App Store & Play Store deployment included\n" +
    "  • 2 months free support\n\n" +
    "🤖 AI Chatbots & Voice Bots — Starting PKR 35,000\n" +
    "  • WhatsApp / Web / Telegram bots\n" +
    "  • Voice bots, RAG on custom knowledge bases\n" +
    "  • CRM & API integrations, 1 month free support\n\n" +
    "For a custom quote, message me on WhatsApp: https://wa.me/923270256089",
  timeline:
    "Here are typical project timelines:\n\n" +
    "• Landing pages: 3–5 days\n" +
    "• Business websites: 1–2 weeks\n" +
    "• Mobile apps: 3–8 weeks\n" +
    "• AI chatbots: 1–3 weeks\n\n" +
    "Timelines depend on scope — reach out on WhatsApp for a precise estimate!",
  portfolio:
    "You can view my previous projects in the Projects section of this portfolio. Each project showcases real results — clean design, smart UX, and conversion optimization. Want case studies? Message me on WhatsApp!",
  process:
    "Here's how I work:\n\n" +
    "1️⃣ You reach out via WhatsApp or the contact section\n" +
    "2️⃣ Free 30-min discovery call to understand your needs\n" +
    "3️⃣ I send a detailed proposal with timeline & fixed price\n" +
    "4️⃣ 50% upfront, 50% on delivery\n" +
    "5️⃣ Development begins with regular updates\n" +
    "6️⃣ Delivery + free support period\n\n" +
    "Ready to start? 👉 https://wa.me/923270256089",
  services:
    "I offer three core services:\n\n" +
    "🌐 Web Development — landing pages, business sites, dashboards & web apps\n" +
    "📱 Mobile App Development — cross-platform iOS + Android apps\n" +
    "🤖 AI Chatbots & Voice Bots — WhatsApp bots, voice bots, RAG systems\n\n" +
    "I also take on custom/enterprise projects — SaaS, retainers, large integrations. Let's discuss on WhatsApp!",
  contact:
    "The fastest way to reach me is WhatsApp:\n📱 +92 327 0256089\n👉 https://wa.me/923270256089\n\nYou can book a free 30-min discovery call, ask questions, or share your project brief!",
  revisions:
    "Yes! 2 rounds of revisions are included in every package. I want to make sure you're 100% happy with the result. 😊",
  international:
    "Absolutely! I work with international clients and bill in USD equivalent. WhatsApp is the easiest way to coordinate across time zones.",
  custom_project:
    "For custom/enterprise projects (SaaS, retainers, large integrations), pricing is discussed based on scope. Let's chat on WhatsApp to understand your requirements: https://wa.me/923270256089",
};

// ─── Quick Reply Buttons ───────────────────────────────────
const INITIAL_QUICK_REPLIES = [
  { label: "💲 Pricing & Services", value: "pricing" },
  { label: "💼 View Projects", value: "portfolio" },
  { label: "⏱️ Timelines", value: "timeline" },
  { label: "📱 Contact / WhatsApp", value: "contact" },
  { label: "🚀 Book a Free Call", value: "book" },
];

// ─── Intent Classifier ────────────────────────────────────
function classifyIntent(input) {
  const lower = input.toLowerCase();

  const patterns = {
    project_inquiry: [
      "project",
      "build",
      "website",
      "web app",
      "develop",
      "create",
      "make",
      "need a site",
      "landing page",
      "ecommerce",
      "e-commerce",
      "application",
      "custom",
    ],
    pricing_question: [
      "price",
      "pricing",
      "cost",
      "how much",
      "rate",
      "charge",
      "budget",
      "afford",
      "expensive",
      "cheap",
      "quote",
      "fee",
      "payment",
    ],
    timeline_question: [
      "time",
      "timeline",
      "how long",
      "duration",
      "deadline",
      "fast",
      "quick",
      "deliver",
      "turnaround",
      "when",
      "days",
      "weeks",
    ],
    portfolio_question: [
      "portfolio",
      "previous",
      "work",
      "example",
      "sample",
      "show",
      "past project",
      "demo",
      "case study",
    ],
    process_question: [
      "process",
      "how do you",
      "workflow",
      "steps",
      "approach",
      "method",
      "start",
    ],
    booking_intent: [
      "book",
      "consultation",
      "schedule",
      "meet",
      "call",
      "talk",
      "discuss",
      "appointment",
      "consult",
      "chat more",
      "interested",
      "hire",
      "ready",
    ],
    contact_question: [
      "contact",
      "whatsapp",
      "phone",
      "reach",
      "email",
      "number",
      "get in touch",
    ],
    mobile_app_question: [
      "mobile app",
      "ios",
      "android",
      "react native",
      "flutter",
      "app store",
      "play store",
    ],
    ai_bot_question: [
      "chatbot",
      "voice bot",
      "ai bot",
      "rag",
      "telegram bot",
      "whatsapp bot",
    ],
    revision_question: [
      "revision",
      "change",
      "modify",
      "update",
      "edit",
      "tweak",
    ],
    international_question: [
      "international",
      "abroad",
      "overseas",
      "usd",
      "dollar",
      "foreign",
    ],
    greeting: [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "sup",
      "yo",
      "what's up",
    ],
    thanks: [
      "thank",
      "thanks",
      "appreciate",
      "great",
      "awesome",
      "perfect",
      "cool",
    ],
    yes: ["yes", "yeah", "yep", "sure", "okay", "ok", "yup", "absolutely", "of course"],
    no: ["no", "nope", "nah", "not now", "later", "maybe"],
  };

  for (const [intent, keywords] of Object.entries(patterns)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      return intent;
    }
  }
  return "unknown";
}

// ─── Simulate available time slots ─────────────────────────
function getAvailableSlots() {
  return ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];
}


// ─── Conversation State Machine ────────────────────────────
const STATES = {
  GREETING: "GREETING",
  IDLE: "IDLE",
  ASK_NAME: "ASK_NAME",
  ASK_BUSINESS: "ASK_BUSINESS",
  ASK_PHONE: "ASK_PHONE",
  ASK_EMAIL: "ASK_EMAIL",
  ASK_DATE: "ASK_DATE",
  ASK_TIME: "ASK_TIME",
  CONFIRM_BOOKING: "CONFIRM_BOOKING",
  DONE: "DONE",
};

// ─── Main Component ───────────────────────────────────────
function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [convoState, setConvoState] = useState(STATES.GREETING);
  const [showBadge, setShowBadge] = useState(true);
  const [quickReplies, setQuickReplies] = useState([]);
  const [hasOpened, setHasOpened] = useState(false);

  // Collected data
  const [collectedData, setCollectedData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 400);
    }
  }, [isOpen]);

  // Send greeting on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      addBotMessage(
        "Hi! 👋 I'm Abdullah's AI assistant. I can help you with services & pricing, project timelines, or booking a free consultation. You can also reach Abdullah directly on WhatsApp (+92 327 0256089). How can I help you today?",
        INITIAL_QUICK_REPLIES
      );
      setConvoState(STATES.IDLE);
    }
  }, [isOpen, hasOpened]);

  // ─── Bot Message Helper ──────────────────────────────────
  function addBotMessage(text, quickBtns = null) {
    setIsTyping(true);
    const delay = Math.min(800 + text.length * 8, 1800);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text }]);
      if (quickBtns) {
        setQuickReplies(quickBtns);
      } else {
        setQuickReplies([]);
      }
    }, delay);
  }

  // ─── Handle User Input ──────────────────────────────────
  function handleSend(value) {
    const text = (value || input).trim();
    if (!text) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setQuickReplies([]);

    // Process based on conversation state
    processInput(text);
  }

  function processInput(text) {
    const intent = classifyIntent(text);

    switch (convoState) {
      case STATES.IDLE:
        handleIdleState(text, intent);
        break;
      case STATES.ASK_NAME:
        handleNameCollection(text);
        break;
      case STATES.ASK_BUSINESS:
        handleBusinessCollection(text);
        break;
      case STATES.ASK_PHONE:
        handlePhoneCollection(text);
        break;
      case STATES.ASK_EMAIL:
        handleEmailCollection(text, intent);
        break;
      case STATES.ASK_DATE:
        handleDateCollection(text);
        break;
      case STATES.ASK_TIME:
        handleTimeCollection(text);
        break;
      case STATES.CONFIRM_BOOKING:
        handleBookingConfirmation(text, intent);
        break;
      case STATES.DONE:
        addBotMessage(
          "Thanks again for reaching out! If you have more questions, feel free to ask anytime. 😊",
          [{ label: "🔄 Start Over", value: "restart" }]
        );
        break;
      default:
        handleIdleState(text, intent);
    }
  }

  // ─── Idle State Handler ──────────────────────────────────
  function handleIdleState(text, intent) {
    switch (intent) {
      case "greeting":
        addBotMessage(
          "Hello! Great to have you here. What can I help you with today?",
          INITIAL_QUICK_REPLIES
        );
        break;

      case "pricing_question":
        addBotMessage(FAQ.pricing, [
          { label: "📞 Book Consultation", value: "book" },
          { label: "⏱️ Timeline", value: "timeline" },
        ]);
        break;

      case "timeline_question":
        addBotMessage(FAQ.timeline, [
          { label: "💲 Pricing Info", value: "pricing" },
          { label: "📞 Book Consultation", value: "book" },
        ]);
        break;

      case "portfolio_question":
        addBotMessage(FAQ.portfolio, [
          { label: "💲 Pricing Info", value: "pricing" },
          { label: "📞 Book Consultation", value: "book" },
        ]);
        break;

      case "process_question":
        addBotMessage(FAQ.process, [
          { label: "💲 Pricing Info", value: "pricing" },
          { label: "📞 Book Consultation", value: "book" },
        ]);
        break;

      case "project_inquiry":
        addBotMessage(
          `${FAQ.services}\n\nWould you like to book a free consultation to discuss your project in detail?`,
          [
            { label: "✅ Yes, let's book!", value: "book" },
            { label: "💲 Pricing first", value: "pricing" },
          ]
        );
        break;

      case "booking_intent":
        startBookingFlow();
        break;

      case "contact_question":
        addBotMessage(FAQ.contact, [
          { label: "🚀 Book a Free Call", value: "book" },
          { label: "💲 Pricing & Services", value: "pricing" },
        ]);
        break;

      case "mobile_app_question":
        addBotMessage(
          "📱 Mobile App Development — Starting PKR 60,000\n\n" +
          "• Cross-platform iOS + Android (React Native / Flutter)\n" +
          "• App Store & Play Store deployment included\n" +
          "• Backend API integration\n" +
          "• 2 months free support after delivery\n\n" +
          "This is my most popular service! Want to discuss your app idea?",
          [
            { label: "🚀 Book a Free Call", value: "book" },
            { label: "💲 Full Pricing", value: "pricing" },
          ]
        );
        break;

      case "ai_bot_question":
        addBotMessage(
          "🤖 AI Chatbots & Voice Bots — Starting PKR 35,000\n\n" +
          "• WhatsApp, website, & Telegram bots\n" +
          "• Voice bots for inbound & outbound calls\n" +
          "• RAG on custom knowledge bases\n" +
          "• CRM & third-party API integrations\n" +
          "• 1 month free support\n\n" +
          "Interested in automating your customer interactions?",
          [
            { label: "🚀 Book a Free Call", value: "book" },
            { label: "💲 Full Pricing", value: "pricing" },
          ]
        );
        break;

      case "revision_question":
        addBotMessage(FAQ.revisions, [
          { label: "📋 Our Process", value: "process" },
          { label: "🚀 Book a Free Call", value: "book" },
        ]);
        break;

      case "international_question":
        addBotMessage(FAQ.international, [
          { label: "💲 Pricing & Services", value: "pricing" },
          { label: "🚀 Book a Free Call", value: "book" },
        ]);
        break;

      case "thanks":
        addBotMessage(
          "You're welcome! 😊 Is there anything else I can help you with?",
          [
            { label: "🚀 Book a Free Call", value: "book" },
            { label: "👋 That's all", value: "done" },
          ]
        );
        break;

      case "yes":
        startBookingFlow();
        break;

      case "no":
        addBotMessage(
          "No worries at all! Feel free to explore the portfolio, and I'm here whenever you need anything. You can also message Abdullah directly on WhatsApp: https://wa.me/923270256089 😊"
        );
        break;

      default:
        if (text.toLowerCase() === "restart") {
          setConvoState(STATES.IDLE);
          setCollectedData({
            name: "",
            business: "",
            phone: "",
            email: "",
            date: "",
            time: "",
          });
          addBotMessage(
            "Let's start fresh! How can I help you today?",
            INITIAL_QUICK_REPLIES
          );
          return;
        }
        if (text.toLowerCase() === "done" || text.toLowerCase() === "contact") {
          if (text.toLowerCase() === "contact") {
            addBotMessage(FAQ.contact, [
              { label: "🚀 Book a Free Call", value: "book" },
              { label: "💲 Pricing & Services", value: "pricing" },
            ]);
            return;
          }
          finishConversation();
          return;
        }
        addBotMessage(
          "I'm not sure about that one! You can pick from the options below, or message Abdullah directly on WhatsApp for a definitive answer: https://wa.me/923270256089",
          INITIAL_QUICK_REPLIES
        );
    }
  }

  // ─── Booking Flow ────────────────────────────────────────
  function startBookingFlow() {
    setConvoState(STATES.ASK_NAME);
    addBotMessage(
      "Awesome, let's get you set up! 🎯\n\nFirst, could you tell me your full name?"
    );
  }

  function handleNameCollection(text) {
    setCollectedData((prev) => ({ ...prev, name: text }));
    setConvoState(STATES.ASK_BUSINESS);
    addBotMessage(
      `Nice to meet you, ${text}! 👋\n\nWhat type of business or project are you looking to build a website for?`
    );
  }

  function handleBusinessCollection(text) {
    setCollectedData((prev) => ({ ...prev, business: text }));
    setConvoState(STATES.ASK_PHONE);
    addBotMessage(
      "Great choice! Could you share your phone number so we can reach you if needed?"
    );
  }

  function handlePhoneCollection(text) {
    // Basic phone validation
    const cleaned = text.replace(/[^0-9+()-\s]/g, "");
    if (cleaned.length < 7) {
      addBotMessage(
        "Hmm, that doesn't look like a valid phone number. Could you try again? (e.g., +1 234 567 8900)"
      );
      return;
    }
    setCollectedData((prev) => ({ ...prev, phone: cleaned }));
    setConvoState(STATES.ASK_EMAIL);
    addBotMessage(
      "Got it! ✅ Would you also like to share your email? (You can type 'skip' if you'd prefer not to)",
      [
        { label: "⏭️ Skip", value: "skip" },
      ]
    );
  }

  function handleEmailCollection(text, intent) {
    if (
      text.toLowerCase() === "skip" ||
      text.toLowerCase() === "no" ||
      intent === "no"
    ) {
      setCollectedData((prev) => ({ ...prev, email: "—" }));
    } else if (text.includes("@") && text.includes(".")) {
      setCollectedData((prev) => ({ ...prev, email: text }));
    } else {
      addBotMessage(
        "That doesn't seem like a valid email. Please enter a valid email or type 'skip' to continue.",
        [{ label: "⏭️ Skip", value: "skip" }]
      );
      return;
    }
    setConvoState(STATES.ASK_DATE);
    addBotMessage(
      "Perfect! 📅 When would you like to start the project? (e.g., 'April 15' or 'next week')"
    );
  }

  function handleDateCollection(text) {
    setCollectedData((prev) => ({ ...prev, date: text }));
    setConvoState(STATES.ASK_TIME);
    const slots = getAvailableSlots();
    addBotMessage(
      `Great! Here are the available consultation slots for ${text}:\n\n${slots
        .map((s, i) => `${i + 1}. ${s}`)
        .join("\n")}\n\nWhich time works best for you?`,
      slots.map((s) => ({ label: `🕐 ${s}`, value: s }))
    );
  }

  function handleTimeCollection(text) {
    const slots = getAvailableSlots();
    const matched = slots.find(
      (s) => s.toLowerCase() === text.toLowerCase() || text.includes(s)
    );
    const selectedTime = matched || text;

    setCollectedData((prev) => ({ ...prev, time: selectedTime }));
    setConvoState(STATES.CONFIRM_BOOKING);

    const dateDisplay = collectedData.date;
    addBotMessage(
      `Perfect! Here's your booking summary:\n\n📋 Name: ${collectedData.name}\n💼 Project: ${collectedData.business}\n📞 Phone: ${collectedData.phone}\n📧 Email: ${collectedData.email || "—"}\n📅 Date: ${dateDisplay}\n🕐 Time: ${selectedTime}\n\nShall I confirm this consultation booking?`,
      [
        { label: "✅ Confirm", value: "yes" },
        { label: "✏️ Change details", value: "restart booking" },
      ]
    );
  }

  function handleBookingConfirmation(text, intent) {
    if (intent === "yes" || text.toLowerCase().includes("confirm")) {
      setConvoState(STATES.DONE);

      addBotMessage(
        `🎉 Excellent! I've scheduled your project consultation for ${collectedData.date} at ${collectedData.time}.\n\nAbdullah will be in touch shortly to confirm the details. Looking forward to bringing your project to life!`
      );

      // Log structured JSON
      setTimeout(() => {
        const output = {
          greeting:
            "Hi! I'm Abdullah's AI assistant. How can I help you today?",
          conversationFlow: messages.map((m) => ({
            role: m.role,
            message: m.text,
          })),
          faqResponses: FAQ,
          dataCollection: { ...collectedData, time: collectedData.time },
          booking: {
            confirmed: true,
            date: collectedData.date,
            time: collectedData.time,
          },
          fallbackResponse:
            "That's a great question. Could you clarify a bit more so I can guide you better?",
          closing:
            "Thanks for reaching out! Looking forward to your project.",
        };
        console.log(
          "📊 AI Assistant — Structured Output:",
          JSON.stringify(output, null, 2)
        );
      }, 2500);

      setTimeout(() => {
        addBotMessage(
          "Thanks for reaching out! Looking forward to your project. 🚀"
        );
      }, 3000);
    } else if (
      text.toLowerCase().includes("change") ||
      text.toLowerCase().includes("restart")
    ) {
      setCollectedData({
        name: "",
        business: "",
        phone: "",
        email: "",
        date: "",
        time: "",
      });
      startBookingFlow();
    } else {
      addBotMessage(
        "No worries! Would you like to confirm the booking or change any details?",
        [
          { label: "✅ Confirm", value: "yes" },
          { label: "✏️ Change details", value: "restart booking" },
          { label: "❌ Cancel", value: "no" },
        ]
      );
    }
  }

  function finishConversation() {
    setConvoState(STATES.DONE);
    addBotMessage(
      "Thanks for visiting! If you ever need help with a project, don't hesitate to reach out. Have a great day! 🙌"
    );
  }

  // ─── Toggle Chat ─────────────────────────────────────────
  function toggleChat() {
    setIsOpen((prev) => !prev);
    if (!isOpen) setShowBadge(false);
  }

  // ─── Quick Reply Handler ─────────────────────────────────
  function handleQuickReply(btn) {
    handleSend(btn.value);
  }

  // ─── Render ──────────────────────────────────────────────
  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-panel" id="chat-assistant-panel">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-header-avatar">
                <RiRobot2Fill />
              </div>
              <div className="chat-header-text">
                <h4>Abdullah's AI Assistant</h4>
                <span>Online — Typically replies instantly</span>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <BsXLg />
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages" id="chat-messages-container">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${msg.role}`}
                id={`chat-msg-${i}`}
              >
                {msg.text.split("\n").map((line, j) => (
                  <React.Fragment key={j}>
                    {line}
                    {j < msg.text.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-typing">
                <div className="chat-typing-dot"></div>
                <div className="chat-typing-dot"></div>
                <div className="chat-typing-dot"></div>
              </div>
            )}

            {/* Quick Replies */}
            {!isTyping && quickReplies.length > 0 && (
              <div className="chat-quick-replies">
                {quickReplies.map((btn, i) => (
                  <button
                    key={i}
                    className="chat-quick-btn"
                    onClick={() => handleQuickReply(btn)}
                    id={`chat-quick-btn-${i}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <input
              ref={inputRef}
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              disabled={isTyping}
              id="chat-input-field"
            />
            <button
              className="chat-send-btn"
              onClick={() => handleSend()}
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              id="chat-send-button"
            >
              <BsSendFill />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        className={`chat-fab ${isOpen ? "chat-open" : ""}`}
        onClick={toggleChat}
        aria-label="Open chat assistant"
        id="chat-fab-button"
      >
        {showBadge && !isOpen && <span className="chat-fab-badge">1</span>}
        <span className="chat-fab-icon">
          {isOpen ? <BsXLg /> : <BsChatDotsFill />}
        </span>
      </button>
    </>
  );
}

export default ChatAssistant;
