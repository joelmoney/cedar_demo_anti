import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronRight, HelpCircle, Printer } from 'lucide-react';

interface Journey4Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen3({ reducedMotion = false, onNext }: Journey4Screen3Props) {
  const [countedValue, setCountedValue] = useState(500);
  const targetValue = 1000;

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
              <h1 className="text-3xl font-bold text-[#1E293B] mb-4">Hi, Saffron</h1>
              <p className="text-[#475569] text-base leading-relaxed px-2">
                You have 1 medical bill ready from ABC Health System. You can pay your bills here or verify your identity to view full bill details.
              </p>
              <button className="mt-3 text-[#4169E1] font-semibold text-base hover:underline">
                View bill details
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#64748B] text-sm font-medium">Total Due</span>
                <div className="text-[#4169E1] text-3xl font-bold countup">
                  ${countedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>

              <motion.button
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl mb-3 hover:bg-[#3557C5] transition-colors shadow-sm"
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

              <button onClick={onNext} className="w-full text-[#4169E1] font-semibold text-base py-2 mb-6 hover:underline btnpulse">
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

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-3"
            >
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">Patient</span>
                <span className="text-[#1E293B] font-medium">Saffron Rivers</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">Account number</span>
                <span className="text-[#1E293B] font-medium">123456789</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">Last bill</span>
                <span className="text-[#1E293B] font-medium">From your Jan 1, 2022 visit</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#64748B]">Next bill due</span>
                <span className="text-[#1E293B] font-medium">Jan 15, 2022</span>
              </div>
            </motion.div>

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[#1E293B] text-xl font-bold">Your medical bills</h2>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Printer className="w-5 h-5 text-[#4169E1]" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#64748B] text-sm font-medium">Professional services</span>
                  <HelpCircle className="w-4 h-4 text-[#94A3B8]" />
                </div>
                <div className="text-[#4169E1] text-2xl font-bold mb-4">$300.00</div>

                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={`prof-${item}`} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                      <div className="flex-1">
                        <div className="text-[#1E293B] font-medium text-sm mb-1">Jan 1, 2022</div>
                        <div className="text-[#64748B] text-xs">Dr. Brandy Thomas</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-[#1E293B] font-bold text-sm">$100.00</div>
                          <div className="text-[#059669] text-xs">Due Feb 1, 2022</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#64748B] text-sm font-medium">Facility services</span>
                  <HelpCircle className="w-4 h-4 text-[#94A3B8]" />
                </div>
                <div className="text-[#4169E1] text-2xl font-bold mb-4">$300.00</div>

                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={`fac-${item}`} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                      <div className="flex-1">
                        <div className="text-[#1E293B] font-medium text-sm mb-1">Jan 1, 2022</div>
                        <div className="text-[#64748B] text-xs">ABC Hospital</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-[#1E293B] font-bold text-sm">$100.00</div>
                          <div className="text-[#059669] text-xs">Due Feb 1, 2022</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-[#94A3B8]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
