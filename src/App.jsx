import { useState } from "react";
import { Sparkles, Heart, Gift } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Countdown from "./components/Countdown";
import Wishes from "./components/Wishes";

function App() {
  const [name, setName] = useState("Sis");
  const [date, setDate] = useState(() => {
    const now = new Date();
    const thisYear = now.getFullYear();
    // Default to 1 month from now
    const d = new Date(now);
    d.setMonth(d.getMonth() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [wishes, setWishes] = useState([
    "Wishing you endless joy and smiles!",
    "May this year be your brightest yet.",
  ]);

  const addWish = (t) => setWishes((w) => [t, ...w]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-fuchsia-700 via-indigo-900 to-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-fuchsia-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 text-pink-100">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold">Birthday Wishes</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white placeholder-white/50 ring-1 ring-white/15 focus:ring-pink-400/40 focus:outline-none"
              placeholder="Sister's name"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white placeholder-white/50 ring-1 ring-white/15 focus:ring-pink-400/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="space-y-12">
          <Header name={name} />

          <div className="flex items-center justify-center">
            <Countdown date={date} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-pink-100">
                <Heart className="w-5 h-5" />
                <h3 className="font-semibold uppercase tracking-wider text-xs">Gallery of memories</h3>
              </div>
              <Gallery />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-pink-100">
                <Gift className="w-5 h-5" />
                <h3 className="font-semibold uppercase tracking-wider text-xs">Leave a wish</h3>
              </div>
              <Wishes onAdd={addWish} />
              <ul className="space-y-2">
                {wishes.map((w, i) => (
                  <li key={i} className="p-3 rounded-xl bg-white/5 ring-1 ring-white/10 text-white/90">
                    {w}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <footer className="pt-6 text-center text-white/60 text-sm">
            Made with love for {name || "you"} 💖
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
