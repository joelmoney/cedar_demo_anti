import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey1Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey1Screen2({ reducedMotion = false, onNext }: Journey1Screen2Props) {
  const [countedValue, setCountedValue] = useState(500);
  const targetValue = 2271.60;

  useEffect(() => {
    if (reducedMotion) {
      setCountedValue(targetValue);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = (targetValue - 500) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCountedValue(targetValue);
        clearInterval(timer);
      } else {
        setCountedValue(500 + increment * currentStep);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [reducedMotion]);
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
                <div className="text-[#4169E1] text-3xl font-bold countup">
                  ${countedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="text-[#94A3B8] text-sm line-through">$3,786.00</div>
              </div>

              <motion.div
                initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                className="bg-[#D1FAE5] rounded-xl p-4 mb-6"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="/images/piggy-bank-spot.png"
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
              </motion.div>

              <motion.button
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl mb-3 hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
              >
                Pay total
              </motion.button>

              <motion.button
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="w-full bg-white text-[#4169E1] font-semibold text-base py-4 rounded-xl mb-6 border-2 border-[#E2E8F0] hover:border-[#4169E1] transition-colors"
              >
                <div className="flex flex-col items-center">
                  <span>Start a payment plan</span>
                  <span className="text-xs text-[#64748B] font-normal mt-0.5">Always 0% interest</span>
                </div>
              </motion.button>

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
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
