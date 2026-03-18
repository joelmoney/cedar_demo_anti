import { motion } from 'framer-motion';
import { easings } from '../../styles/design-tokens';
import { NeonButton } from '../NeonButton';

interface StartScreenProps {
  onStart: () => void;
  reducedMotion: boolean;
}

export function StartScreen({ onStart, reducedMotion }: StartScreenProps) {
  return (
    <div className="h-full w-full relative" style={{ backgroundColor: '#0F130A' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/Attract_DataFlower_greenv03.5.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-16 gap-12">
        <motion.img
          src="/images/start_logo.png"
          alt="Cedar Logo"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: easings.smooth }}
          style={{ width: '100px', height: '50px' }}
        />

        <NeonButton onClick={onStart} reducedMotion={reducedMotion}>
          Start
        </NeonButton>
      </div>
    </div>
  );
}
