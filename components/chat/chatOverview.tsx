"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const chatVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ChatsOverview({
  onSelectChat,
  onBack,
}: {
  onSelectChat: (chat: {
    id: number;
    friendName: string;
    lastMessage: string;
    timestamp: string;
    avatar: string;
  }) => void;
  onBack: () => void;
}) {
  const chats = [
    {
      id: 1,
      friendName: "Luna",
      lastMessage: "How are you feeling today?",
      timestamp: "2m ago",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      friendName: "Nova",
      lastMessage: "That sounds interesting!",
      timestamp: "1h ago",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-300 hover:text-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold text-center text-gray-100">
          Your Chats
        </h1>
        <div className="w-24"></div>
      </div>
      <div className="space-y-4">
        {chats.map((chat, index) => (
          <motion.div
            key={chat.id}
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer transition-colors hover:bg-gray-700"
            onClick={() => onSelectChat(chat)}
          >
            <img
              src={chat.avatar}
              alt={chat.friendName}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-100">
                {chat.friendName}
              </h3>
              <p className="text-sm text-gray-400">{chat.lastMessage}</p>
            </div>
            <div className="text-xs text-gray-500">{chat.timestamp}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
