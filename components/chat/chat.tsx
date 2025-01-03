"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Friend } from "./maytris";

const messageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const TypingAnimation = () => (
  <div className="flex space-x-2 p-3 bg-gray-700 rounded-lg max-w-xs">
    <div
      className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    ></div>
    <div
      className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    ></div>
    <div
      className="w-3 h-3 bg-gray-400 rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    ></div>
  </div>
);

export default function Chat({
  friend,
  onBack,
}: {
  friend: Friend;
  onBack: () => void;
}) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", content: "Hello! How can I help you today?" },
    { id: 2, sender: "user", content: "Hi! I'm feeling a bit down today." },
    {
      id: 3,
      sender: "ai",
      content: "I'm sorry to hear that. Would you like to talk about it?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "user", content: newMessage },
      ]);
      setNewMessage("");
      setIsTyping(true);
      // Simulate AI response
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "ai",
            content:
              "I understand how you feel. Remember, it's okay to have bad days. Is there anything specific you'd like to talk about?",
          },
        ]);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      <div className="flex items-center justify-between mb-4 bg-gray-800 p-4 rounded-t-lg">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-300 hover:text-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex items-center">
          <img
            src={friend?.avatar}
            alt={friend?.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          <h1 className="text-2xl font-bold text-center text-gray-100">
            {friend?.name || "Chat"}
          </h1>
        </div>
        <div className="w-24"></div>
      </div>
      <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-gray-800 rounded-lg shadow-inner">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "ai" && (
                <img
                  src={friend?.avatar}
                  alt={friend?.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex justify-start"
            >
              <img
                src={friend?.avatar}
                alt={friend?.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <TypingAnimation />
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2 bg-gray-700 text-gray-100 border-gray-600"
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
          <Send className="h-4 w-4 mr-2" /> Send
        </Button>
      </div>
    </div>
  );
}
