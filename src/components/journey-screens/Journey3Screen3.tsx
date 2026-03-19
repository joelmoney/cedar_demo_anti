import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Journey3Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen3({ reducedMotion = false, onNext }: Journey3Screen3Props) {
  return (
    <div className="h-full w-full flex">
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-2/5 flex items-center justify-center p-12"
        style={{ backgroundColor: '#F9F8F1' }}
      >
        <div className="max-w-lg text-left">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <p className="eyebrow mb-3">
              JOURNEY 3
            </p>
            <h1 className="headline mt-4 mb-4">
              Full Image Screen 3
            </h1>
            <p className="bodycopy mt-6 mb-6">
              This is the third full-image screen for Journey 3. Replace this content with your desired text and image.
            </p>
          </motion.div>

          <motion.button
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={onNext}
            className="outlinebutton flex items-center gap-3"
          >
            <span>Continue</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-3/5 relative overflow-hidden"
      >
        <img
          src="/images/persona_3.jpg"
          alt="Journey 3 Screen 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </div>
  );
}
