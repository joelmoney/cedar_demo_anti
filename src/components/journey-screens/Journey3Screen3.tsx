import { motion } from 'framer-motion';

interface Journey3Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen3({ reducedMotion = false }: Journey3Screen3Props) {
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="h-full w-full relative overflow-hidden"
    >
      <img
        src="/images/persona_3.jpg"
        alt="Journey 3 Screen 3"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  );
}
