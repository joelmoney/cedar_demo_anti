import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { motion } from 'framer-motion';

interface Journey3Screen8Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen8({ reducedMotion = false, onNext }: Journey3Screen8Props) {
  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide relative">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-8 pb-6 flex flex-col items-center">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <img src="/images/mail.png" alt="Mail" className="w-[65px] h-[55px]" />
          </motion.div>

          <h1 className="text-2xl font-bold text-[#1E293B] text-center mb-3">
            Payment confirmed!
          </h1>

          <p className="text-center text-[#475569] text-sm mb-2 px-4">
            Thank you for your payment of{' '}
            <span className="font-bold text-[#1E293B]">$470.96</span>.
          </p>

          <motion.div
            initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-6 mt-6"
          >
            <div className="flex flex-col items-center mb-6 pb-6 border-b border-[#E2E8F0]">
              <img src="/images/sentmail.png" alt="Sent mail" className="w-[26px] h-[14px] mb-3" />
              <div className="text-center">
                <div className="text-[#1E293B] font-semibold text-sm mb-1">
                  We emailed you a receipt
                </div>
                <div className="text-[#64748B] text-sm">
                  j.velez.academics@univ.edu
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-[#64748B] text-sm mb-2">
                Confirmation number:
              </div>
              <div className="text-[#1E293B] font-bold text-base">
                PA-2874-6525-2343
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
