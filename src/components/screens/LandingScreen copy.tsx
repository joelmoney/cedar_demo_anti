import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

interface LandingScreenProps {
  reducedMotion: boolean;
}

export function LandingScreen({ reducedMotion }: LandingScreenProps) {
  return (
    <div className="h-full bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={
          reducedMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                y: 0,
              }
        }
        transition={{
          duration: 0.35,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        className="text-center"
      >
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -3, 0],
                }
          }
          transition={
            reducedMotion
              ? {}
              : {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          <Smartphone className="w-20 h-20 text-white mx-auto mb-6" strokeWidth={1.5} />
        </motion.div>

        <h2 className="text-4xl font-bold text-white mb-4">
          Linear Demo
        </h2>

        <p className="text-lg text-blue-100">
          Tap to experience
        </p>
      </motion.div>
    </div>
  );
}
