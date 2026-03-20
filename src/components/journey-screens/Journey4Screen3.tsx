import { motion } from 'framer-motion';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

interface Journey4Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen3({ reducedMotion = false, onNext }: Journey4Screen3Props) {
  const totalAmount = 1303.89;

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-8 pb-6">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="text-center mb-6">
              <div className="text-[#64748B] text-sm font-medium mb-2">Welcome</div>
              <h1 className="text-[#1E293B] text-2xl font-bold leading-tight px-4">
                Saffron, you have bills ready to be paid
              </h1>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#64748B] text-sm font-medium">Total due</span>
                <div className="text-[#1E293B] text-2xl font-bold">
                  ${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <motion.button
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-3.5 rounded-xl mb-3 hover:bg-[#3557C5] transition-colors shadow-sm"
              >
                Pay total: ${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </motion.button>

              <motion.button
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="w-full text-[#4169E1] font-medium text-sm py-2 mb-4 hover:underline transition-colors"
              >
                More payment options &gt;
              </motion.button>
            </div>

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-[#E9E4FF] rounded-2xl p-5"
            >
              <h2 className="text-[#1E293B] text-xl font-bold mb-3">
                Medical bills from your emergency visit
              </h2>
              <p className="text-[#1E293B] text-sm leading-relaxed mb-4">
                You have 2 bills left from your emergency visit. You <span className="text-[#4169E1] font-semibold">previously paid $100</span> towards the facility bill—now you have 2 bills left to be paid.
              </p>

              <motion.button
                onClick={onNext}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="w-full bg-[#7C3AED] text-white font-medium text-sm py-3 px-4 rounded-xl hover:bg-[#6D28D9] transition-colors shadow-sm flex items-center justify-center gap-2 btnpulse"
              >
                Why did my insurance not cover this?
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>

              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-center justify-between py-4 border-b border-[#D4C5F9]"
              >
                <div className="flex-1">
                  <div className="text-[#1E293B] font-semibold text-sm mb-1">April 1, 2026</div>
                  <div className="text-[#64748B] text-xs">Dr. Brandy Thomas</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-[#1E293B] font-bold text-base">${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    <div className="text-[#64748B] text-xs">Due May 1, 2026</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#64748B]" />
                </div>
              </motion.div>

              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="pt-4"
              >
                <h3 className="text-[#1E293B] font-bold text-sm mb-2">Individual in-network deductible not met</h3>
                <p className="text-[#1E293B] text-sm leading-relaxed">
                  You have <span className="font-semibold">$1500.00</span> left until you meet your $2,000.00 in-network deductible.
                </p>
              </motion.div>
            </motion.div>

          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
