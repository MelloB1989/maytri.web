"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const friendVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export type Friend = {
  id: number;
  name: string;
  avatar: string;
} | null;

export default function AIFriendsList({
  onSelectFriend,
}: {
  onSelectFriend: (friend: Friend) => void;
}) {
  const [friends, setFriends] = useState([
    { id: 1, name: "Luna", avatar: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "Nova", avatar: "/placeholder.svg?height=100&width=100" },
  ]);
  const [newFriendName, setNewFriendName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const createNewFriend = () => {
    if (newFriendName) {
      const newFriend = {
        id: friends.length + 1,
        name: newFriendName,
        avatar: "/placeholder.svg?height=100&width=100",
      };
      setFriends([...friends, newFriend]);
      setNewFriendName("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-100">
        Your AI Friends
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {friends.map((friend, index) => (
          <motion.div
            key={friend.id}
            variants={friendVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md cursor-pointer transition-colors hover:bg-gray-700"
            onClick={() => onSelectFriend(friend)}
          >
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-20 h-20 rounded-full mb-2"
            />
            <span className="text-lg font-semibold text-gray-100">
              {friend.name}
            </span>
          </motion.div>
        ))}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center p-4 bg-gray-700 rounded-lg shadow-md cursor-pointer transition-colors hover:bg-gray-600"
            >
              <Plus className="w-12 h-12 text-gray-300 mb-2" />
              <span className="text-lg font-semibold text-gray-100">
                New Friend
              </span>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="bg-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle>Create a New AI Friend</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Enter friend's name"
                value={newFriendName}
                onChange={(e) => setNewFriendName(e.target.value)}
                className="bg-gray-700 text-gray-100 border-gray-600"
              />
              <Button
                onClick={createNewFriend}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Create Friend
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
