import { motion } from 'framer-motion';
import { fonts, easings } from '../styles/design-tokens';

interface NeonOutlineButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  reducedMotion?: boolean;
  delay?: number;
}

export function NeonOutlineButton({ onClick, children, reducedMotion = false, delay = 0.2 }: NeonOutlineButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: easings.smooth, delay }}
      whileHover={{ scale: 1.05, transition: { duration: 0 } }}
      whileTap={{ scale: 0.98 }}
      className="px-10 py-2 transition-colors shadow-xl"
      style={{
        backgroundColor: 'transparent',
        color: '#B2F200',
        border: '2px solid #B2F200',
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
