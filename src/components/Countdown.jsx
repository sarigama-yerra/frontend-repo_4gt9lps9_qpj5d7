import { useEffect, useMemo, useState } from "react";

function pad(n) {
  return n.toString().padStart(2, "0");
}

function useCountdown(targetDate) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, targetDate - now);
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, done: diff === 0 };
}

function Countdown({ date }) {
  const target = useMemo(() => new Date(date).getTime(), [date]);
  const { d, h, m, s, done } = useCountdown(target);

  if (Number.isNaN(target)) return null;

  return (
    <div className="flex items-center justify-center gap-3 text-white/90">
      {done ? (
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 ring-1 ring-emerald-300/30 text-emerald-200 text-sm">It's today! 🎉</span>
      ) : (
        [
          [d, "Days"],
          [h, "Hours"],
          [m, "Minutes"],
          [s, "Seconds"],
        ].map(([val, label], i) => (
          <div key={i} className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold tabular-nums">
              {pad(val)}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">
              {label}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Countdown;
