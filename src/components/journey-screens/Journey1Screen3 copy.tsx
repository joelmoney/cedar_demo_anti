import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { useEffect, useState } from 'react';

interface Journey1Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey1Screen3({ reducedMotion = false, onNext }: Journey1Screen3Props) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count1 = useMotionValue(500);
  const count2 = useMotionValue(0);
  const rounded1 = useTransform(count1, (latest) => `$${latest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
  const rounded2 = useTransform(count2, (latest) => `$${latest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        const controls1 = animate(count1, 2271.60, { duration: 1.5, ease: "easeOut" });
        const controls2 = animate(count2, 189.30, { duration: 1.5, ease: "easeOut" });
        setHasAnimated(true);

        return () => {
          controls1.stop();
          controls2.stop();
        };
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated, count1, count2]);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide relative">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-8 pb-6">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#1E293B] mb-4">Hi, Elias</h1>
              <p className="text-[#475569] text-base leading-relaxed px-2">
                You have 1 medical bill ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.
              </p>
              <button className="mt-3 text-[#4169E1] font-semibold text-base hover:underline">
                View bill details
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#64748B] text-sm font-medium">Discounted total</span>
                <motion.div className="text-[#4169E1] text-3xl font-bold">
                  {rounded1}
                </motion.div>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="text-[#94A3B8] text-sm line-through">$3,786.00</div>
              </div>

              <div className="bg-[#D1FAE5] rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="/images/Piggybank.svg"
                    alt=""
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-[#065F46] font-semibold text-base leading-snug">
                    Save $1,540.40 when you pay by February 11, 2026, 11:59 PM EST
                  </p>
                </div>
                <p className="text-[#047857] text-sm mb-2 pl-9">
                  Pay your full balance or start a payment plan to qualify for this discount.
                </p>
                <button className="text-[#059669] font-semibold text-sm pl-9 hover:underline">
                  See details
                </button>
              </div>

              <button className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl mb-3 hover:bg-[#3557C5] transition-colors shadow-sm">
                Pay total
              </button>

              <button className="w-full bg-white text-[#4169E1] font-semibold text-base py-4 rounded-xl mb-6 border-2 border-[#E2E8F0] hover:border-[#4169E1] transition-colors">
                <div className="flex flex-col items-center">
                  <span>Start a payment plan</span>
                  <span className="text-xs text-[#64748B] font-normal mt-0.5">Always 0% interest</span>
                </div>
              </button>

              <button className="w-full text-[#475569] font-medium text-base py-2 mb-4 hover:text-[#1E293B] transition-colors">
                More payment options
              </button>

              <button className="w-full text-[#4169E1] font-medium text-base py-2 mb-6 hover:underline">
                Pay a partial amount
              </button>

              <div className="flex items-center justify-center gap-2 text-[#64748B] text-sm py-3">
                <img src="/images/lock.png" alt="" className="w-4 h-4" />
                <span>Secure payments</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[#64748B] text-sm py-3 border-t border-slate-200">
                <img src="/images/dollar-sign.png" alt="" className="w-4 h-4" />
                <span>Unable to pay your bills?</span>
                <button className="text-[#4169E1] font-medium hover:underline">
                  See options
                </button>
              </div>
            </div>
          </div>
        </main>

        <JourneyFooter />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bg-[#171731] bg-opacity-50 z-20"
        style={{
          top: '80px',
          left: 0,
          right: 0,
          bottom: '140px'
        }}
      />

      <motion.div
        initial={reducedMotion ? { y: 0 } : { y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="absolute left-0 right-0 z-30"
        style={{ top: '100px', bottom: '0px' }}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl h-full overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="px-6 pt-8 pb-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6">
                <img
                  src="/images/Piggybank.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-[#1E293B] mb-4">
                You have a discount available
              </h2>

              <p className="text-[#475569] text-base leading-relaxed mb-4">
                We understand the challenges of paying medical bills and would like to offer you a discount. See below for discount details.
              </p>

              <p className="text-[#475569] text-base leading-relaxed mb-8">
                To accept, pay your total balance or start a payment plan by <span className="font-bold">Oct 31, 2020 11:59PM EST</span> to qualify.
              </p>

              <div className="w-full bg-[#F8FAFC] rounded-2xl p-6 mb-6">
                <div className="text-[#64748B] text-sm font-medium mb-2">Discounted total</div>
                <motion.div className="text-[#4169E1] text-4xl font-bold mb-3">
                  {rounded1}
                </motion.div>
                <div className="text-[#64748B] text-base">
                  <span className="line-through">$3,786.00</span>
                  <span className="ml-2">(Save $1,540.40)</span>
                </div>
                <button className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl mt-6 hover:bg-[#3557C5] transition-colors shadow-sm">
                  Pay total
                </button>
              </div>

              <div className="w-full bg-[#F8FAFC] rounded-2xl p-6 mb-6">
                <div className="text-[#1E293B] text-base font-bold mb-2">Discounted plans starting at</div>
                <div className="flex items-baseline justify-center mb-1">
                  <motion.span className="text-[#4169E1] text-4xl font-bold">
                    {rounded2}
                  </motion.span>
                  <span className="text-[#64748B] text-xl ml-2">/mo</span>
                </div>
                <div className="text-[#64748B] text-sm mb-6">0% interest on all plans</div>
                <button
                  onClick={onNext}
                  className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
                >
                  See plan options
                </button>
              </div>

              <button className="text-[#4169E1] font-semibold text-base hover:underline">
                Ok, thanks
              </button>
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
