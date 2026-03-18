import { motion } from 'framer-motion';
import { fonts, easings } from '../styles/design-tokens';

interface NeonButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  reducedMotion?: boolean;
  delay?: number;
}

export function NeonButton({ onClick, children, reducedMotion = false, delay = 0.15 }: NeonButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easings.smooth, delay }}
      whileHover={{ scale: 1.05, backgroundColor: '#ADE9A8', transition: { duration: 0 } }}
      whileTap={{ scale: 0.98 }}
      className="px-10 py-2 transition-colors shadow-xl"
      style={{
        backgroundColor: '#B2F200',
        color: '#31273F',
        borderRadius: '100px',
        fontFamily: fonts.sans,
        fontSize: '1rem',
        fontWeight: 600
      }}
    >
      {children}
    </motion.button>
  );
}
