import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey3Screen7Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen7({ reducedMotion = false, onNext }: Journey3Screen7Props) {
  const [amount, setAmount] = useState(0);
  const targetAmount = 470.96;

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = targetAmount / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setAmount(increment * currentStep);
      } else {
        setAmount(targetAmount);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#F8F9FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto bg-white min-h-full flex flex-col">
          <div className="flex-1 px-5 py-4">
            <button className="flex items-center gap-2 text-slate-600 text-[15px] mb-6">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>

            <h1 className="text-[32px] font-bold text-[#0A2540] leading-tight mb-8 text-center">
              Payment summary
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-3 border-b border-slate-100">
                <span className="text-[15px] text-slate-600">Total due</span>
                <span className="text-[17px] font-semibold text-slate-900">$470.96</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-slate-200">
                <span className="text-[15px] text-slate-600">Payment total</span>
                <span className="text-[17px] font-semibold text-slate-900">$470.96</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-[15px] text-slate-700 mb-2">
                You're about to make a payment of
              </p>
              <motion.p
                className="text-[32px] font-bold text-[#0A2540] mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ${amount.toFixed(2)}
              </motion.p>
              <p className="text-[14px] text-slate-600">
                Remaining balance: $0.00
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-[14px] text-slate-600 mb-3">
                Payment method
              </h3>

              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#4169E1] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14C4.686 14 2 11.314 2 8Z" fill="white"/>
                      <path d="M8 5V8L10 10" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-[16px] font-semibold text-slate-900">Blue Star Wallet</div>
                    <div className="text-[13px] text-slate-600">Health Savings Account</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="bg-[#EBF4FF] rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-[14px] font-semibold text-slate-900">HSA/FSA balance</div>
                        <div className="text-[12px] text-slate-600 mt-0.5">
                          Tax-free dollars available in your health savings accounts
                        </div>
                      </div>
                      <div className="text-[14px] font-semibold text-slate-900 ml-3">$600.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-[14px] text-slate-600 mb-2">Email receipt</div>
              <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
                <span className="text-[15px] text-slate-900">agold@gmail.com</span>
                <button className="text-[15px] text-[#4169E1] font-semibold">Edit</button>
              </div>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-4 px-6 rounded-xl transition-colors text-[16px] btnpulse mb-3"
            >
              Pay $470.96
            </button>

            <div className="flex items-center justify-center gap-2 text-[13px] text-slate-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5V8M8 11H8.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Secure payments</span>
            </div>
          </div>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
