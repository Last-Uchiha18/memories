import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Music, Image as ImageIcon, MessageCircle, ImageOff } from "lucide-react";

const memories = [
  { img: "/food.jpeg", caption: "Foodie ❤️" },
  { img: "/ice-tea.jpeg", caption: "You cheater, drinking ice tea without me" },
  { img: "/smile.jpeg", caption: "Your smile makes my day" },
  { img: "/mundane.jpeg", caption: "Even the mundane is fun with you" },
  { img: "/sass.jpeg", caption: "Damn your sass sis 💅" },
  { img: "/doc.jpeg", caption: "I beilive in you" },
  { img: "/couple.jpeg", caption: "I know taylor swift is getting married, we will too dw" },

];

const notes = [
  "I know food is your first love, I have made peace with it :')",
  "You are like ice tea on a hot day.",
  "Always keep smiling ✨" ,
  "Counting days until I see you again",
  "You are amaze!!" ,
  "You are gonne be the best surgeon!" ,
  "I love you so much ❤️❤️",
];

export default function MemorySite() {
  const [noteIndex, setNoteIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center p-4">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-pink-600 mt-6 mb-4 text-center"
      >
        For My Favorite Person 💕
      </motion.h1>

      {/* Memories carousel */}
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl shadow-lg p-4"
        >
          <div className="flex items-center mb-2">
            <ImageIcon className="text-pink-500 mr-2" />
            <h2 className="text-lg font-semibold">Our Memories</h2>
          </div>
          <div className="relative w-full h-80 overflow-hidden rounded-xl">
            <img
              src={memories[noteIndex % memories.length].img}
              alt="Memory"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center mt-2 text-gray-700">
            {memories[noteIndex % memories.length].caption}
          </p>
          <div className="flex justify-between mt-3">
            <button
              onClick={() => setNoteIndex((i) => (i - 1 + memories.length) % memories.length)}
              className="px-3 py-1 bg-pink-200 rounded-xl"
            >
              Prev
            </button>
            <button
              onClick={() => setNoteIndex((i) => (i + 1) % memories.length)}
              className="px-3 py-1 bg-pink-200 rounded-xl"
            >
              Next
            </button>
          </div>
        </motion.div>
      </div>

      {/* Notes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 mt-6"
      >
        <div className="flex items-center mb-2">
          <MessageCircle className="text-purple-500 mr-2" />
          <h2 className="text-lg font-semibold">Little Notes</h2>
        </div>
        <p className="text-center text-gray-700 italic">{notes[noteIndex % notes.length]}</p>
      </motion.div>

      {/* Playlist */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 mt-6"
      >
        <div className="flex items-center mb-2">
          <Music className="text-blue-500 mr-2" />
          <h2 className="text-lg font-semibold">Vibe to it SWIFTIE, everything will be fine</h2>
        </div>
        <iframe
          src="https://open.spotify.com/embed/playlist/7h9Dpkzp6qBaqNcptXmg8v?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-600">Made with <Heart className="inline text-red-500" /> just for you.</p>
      </motion.div>
    </div>
  );
}
