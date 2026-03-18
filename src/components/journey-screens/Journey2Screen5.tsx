import { motion } from 'framer-motion';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey2Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey2Screen5({ reducedMotion = false, onNext }: Journey2Screen5Props) {
  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-12 pb-6 flex items-center justify-center">
          <motion.div
            initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-md"
            onClick={onNext}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center cursor-pointer">
              <motion.div
                initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="mb-8"
              >
                <img
                  src="/images/j2_closing_illustration.png"
                  alt="Success"
                  className="w-48 h-48 mx-auto object-contain"
                />
              </motion.div>

              <motion.h1
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold text-[#1E293B] mb-4"
              >
                Thank you - we will take it from here!
              </motion.h1>

              <motion.p
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-[#475569] text-base leading-relaxed"
              >
                We will follow up with the insurance company to get your claim covered.
              </motion.p>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
