import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { MobileShell } from '../MobileShell';

interface Journey3Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen5({ reducedMotion = false, onNext }: Journey3Screen5Props) {
  const [amount, setAmount] = useState(0);
  const targetAmount = 360.12;

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
        <div className="max-w-2xl mx-auto px-5 py-8 flex items-center justify-center">
          <MobileShell>
            <div className="h-full w-full bg-white overflow-y-auto">
              <div className="px-5 py-4">
                <button className="flex items-center gap-2 text-slate-600 text-[15px] mb-6">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to your bills
                </button>

                <h1 className="text-[28px] font-bold text-[#0A2540] leading-tight mb-3">
                  Your visit to ABC Health System
                </h1>

                <div className="flex items-center gap-3 text-[14px] text-slate-600 mb-8">
                  <span>Nov 20-23, 2021</span>
                  <span>|</span>
                  <span>John Doe</span>
                  <span>|</span>
                  <span>Surgery</span>
                </div>

                <div className="bg-white border-2 border-slate-100 rounded-xl p-5 mb-6">
                  <div className="text-[13px] text-slate-600 mb-2">Amount you owe</div>
                  <motion.div
                    className="text-[42px] font-bold text-[#0A2540] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ${amount.toFixed(2)}
                  </motion.div>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-[13px]">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-slate-700">Insurance applied</span>
                      <img src="/images/abc_logo.png" alt="Blue Star Insurance" className="h-4 ml-auto" />
                    </div>
                    <div className="flex items-center gap-2 text-[13px]">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-slate-700">Ready to pay</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-[15px] font-semibold text-slate-900">HSA/FSA balance</span>
                      <span className="text-[15px] font-semibold text-slate-900">$600.00</span>
                    </div>
                    <p className="text-[12px] text-slate-600">
                      Tax-free dollars available in your health savings accounts
                    </p>
                  </div>

                  <button
                    onClick={onNext}
                    className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-4 px-6 rounded-xl transition-colors text-[16px] btnpulse"
                  >
                    Pay this bill
                  </button>
                </div>

                <details className="bg-slate-50 rounded-xl overflow-hidden">
                  <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-[15px] font-semibold text-slate-900">
                    <span>Balance breakdown</span>
                    <svg width="12" height="8" viewBox="0 0 12 8" className="transform transition-transform">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 space-y-3">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-slate-700">Total billed</span>
                      <span className="font-semibold text-slate-900">$820.54</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-1">
                        <span className="text-slate-700">Insurance adjusted</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-slate-400">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 4.5V7.5M7 9.5H7.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">- $335.42</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-1">
                        <span className="text-slate-700">Insurance paid</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-slate-400">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M7 4.5V7.5M7 9.5H7.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="font-semibold text-slate-900">- $0.00</span>
                    </div>
                    <div className="text-[12px] text-slate-600 pl-4">Blue Star PPO</div>
                  </div>
                </details>
              </div>
            </div>
          </MobileShell>
        </div>
      </div>

      <JourneyFooter />
    </div>
  );
}
