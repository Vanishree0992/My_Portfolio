import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, live, code }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-nude border-2 border-wood rounded-2xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-heading text-xl text-wood">{title}</h3>
        <p className="text-coffee text-sm my-2">{description}</p>
        <div className="flex justify-between mt-3">
          <a href={live} target="_blank" rel="noreferrer" className="text-honey hover:text-wood transition">Live</a>
          <a href={code} target="_blank" rel="noreferrer" className="text-honey hover:text-wood transition">Code</a>
        </div>
      </div>
    </motion.div>
  );
}
