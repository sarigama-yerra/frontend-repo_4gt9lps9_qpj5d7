import { useState } from "react";

function Wishes({ onAdd }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    onAdd?.(t);
    setText("");
  }

  return (
    <div className="space-y-3">
      <form onSubmit={submit} className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your wish..."
          className="flex-1 px-3 py-2 rounded-xl bg-white/10 text-white placeholder-white/50 ring-1 ring-white/15 focus:ring-pink-400/40 focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow hover:opacity-95"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Wishes;
