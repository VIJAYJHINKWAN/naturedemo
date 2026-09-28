import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const DUMMY_RESPONSES = [
  "That's a wonderful question! At Serenterra, we believe in creating authentic experiences. How can I help you today?",
  "I'd love to help! Are you interested in booking a stay, learning about our experiences, or would you like information about our dining?",
  "Absolutely! Our forest cabins are designed for ultimate peace and relaxation. Would you like to know more about a specific room type?",
  "We're here to help! Feel free to ask about availability, pricing, or any special requests you might have.",
  "Thank you for your interest in Serenterra! Our team is available 24/7 to assist with bookings and inquiries.",
  "You can reach our concierge team directly at +1 (555) 987-6543 or hello@serenterra.com for immediate assistance.",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to Serenterra! I'm here to help answer your questions about our retreat. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: DUMMY_RESPONSES[Math.floor(Math.random() * DUMMY_RESPONSES.length)],
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors group"
            data-testid="chatbot-button"
          >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-primary/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-white p-6 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-semibold">Serenterra Concierge</h3>
                <p className="text-xs text-white/70 mt-1">Available 24/7</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                data-testid="chatbot-close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-xs px-4 py-3 rounded-lg text-sm leading-relaxed",
                      message.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-secondary text-primary rounded-bl-none"
                    )}
                    data-testid={`message-${message.sender}`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="bg-secondary text-primary px-4 py-3 rounded-lg rounded-bl-none flex gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-primary/10 p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 bg-background border border-primary/20 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  data-testid="chatbot-input"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="w-10 h-10 bg-primary text-white rounded flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  data-testid="chatbot-send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
