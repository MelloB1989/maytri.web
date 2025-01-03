"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIFriendsList, { Friend } from "@/components/chat/maytris";
import ChatsOverview from "@/components/chat/chatOverview";
import Chat from "@/components/chat/chat";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("friends");
  const [selectedFriend, setSelectedFriend] = useState<Friend>(null);

  const screenVariants = {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          variants={screenVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
        >
          {currentScreen === "friends" && (
            <AIFriendsList
              onSelectFriend={(friend) => {
                setSelectedFriend(friend);
                setCurrentScreen("chats");
              }}
            />
          )}
          {currentScreen === "chats" && (
            <ChatsOverview
              onSelectChat={() => {
                setCurrentScreen("chat");
              }}
              onBack={() => setCurrentScreen("friends")}
            />
          )}
          {currentScreen === "chat" && (
            <Chat
              friend={selectedFriend}
              onBack={() => setCurrentScreen("chats")}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
