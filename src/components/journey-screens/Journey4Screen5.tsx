import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Info, Zap } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey4Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen5({ reducedMotion = false, onNext }: Journey4Screen5Props) {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPreferBox, setShowPreferBox] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setPaymentAmount('75.00');
      setShowPreferBox(true);
      return;
    }

    const targetAmount = '75.00';
    const delay = 600;

    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= targetAmount.length) {
          setPaymentAmount(targetAmount.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setShowPreferBox(true);
          }, 300);
        }
      }, 100);
    }, delay);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-6 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-4"
          >
            {/* Payment Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1E293B] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-[#1E293B] font-semibold text-base">Payment summary</span>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#64748B]" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 pt-2">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#64748B] text-sm font-medium">Total due</span>
                    <span className="text-[#1E293B] text-lg font-semibold">1,000.00</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Partial Payment Card */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-6 h-6 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-[#1E293B] font-semibold text-lg">Partial payment amount</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[#475569] text-sm font-medium mb-3">
                    How much do you want to pay?
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1E293B] text-lg font-medium">$</span>
                    <input
                      type="text"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      className="w-full pl-9 pr-4 py-3.5 text-lg font-medium border-2 border-[#3B82F6] rounded-xl focus:outline-none focus:border-[#2563EB] transition-colors bg-white"
                      readOnly
                    />
                  </div>
                </div>

                {showPreferBox && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex items-start gap-2 p-3 bg-[#F8FAFC] rounded-lg"
                  >
                    <Zap className="w-5 h-5 text-[#64748B] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[#475569] text-sm leading-relaxed">
                        Prefer to pay <span className="font-semibold text-[#1E293B]">$66.66/month</span>, interest-free?{' '}
                        <button onClick={onNext} className="text-[#4169E1] font-semibold hover:underline btnpulse">
                          View payment plan
                        </button>
                      </p>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={onNext}
                  className={`w-full bg-[#4169E1] text-white font-semibold text-base py-3.5 rounded-xl hover:bg-[#3557C5] transition-all shadow-sm ${!showPreferBox ? 'btnpulse' : ''}`}
                >
                  Continue with partial amount
                </button>
              </div>
            </div>

            {/* Other Steps */}
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#94A3B8] text-sm font-semibold">2</span>
                  </div>
                  <span className="text-[#94A3B8] font-medium text-base">Payment method</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#94A3B8] text-sm font-semibold">3</span>
                  </div>
                  <span className="text-[#94A3B8] font-medium text-base">Payment information</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#E2E8F0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#94A3B8] text-sm font-semibold">4</span>
                  </div>
                  <span className="text-[#94A3B8] font-medium text-base">Review and pay</span>
                </div>
              </div>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
