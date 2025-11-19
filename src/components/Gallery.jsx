import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529634899238-6554e4b4ad6a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604881987922-1b3c379d4d80?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1400&auto=format&fit=crop"
];

function Gallery() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {photos.map((src, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="overflow-hidden rounded-xl ring-1 ring-white/10"
        >
          <img
            src={src}
            alt={`Memory ${idx + 1}`}
            className="w-full h-28 sm:h-36 md:h-44 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Gallery;
