import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, Shield } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey6Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey6Screen3({ reducedMotion = false, onNext }: Journey6Screen3Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
            <button className="flex items-center gap-2 text-[#64748B] text-sm hover:text-[#475569] transition-colors">
              <ChevronLeft className="w-4 h-4" />
              View all bills
            </button>

            {/* Payment Summary Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#1E293B] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-[#1E293B] font-semibold text-base">Payment summary</p>
                    <p className="text-[#64748B] text-sm">Payment total: $80.00</p>
                  </div>
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
                <div className="px-5 pb-4 border-t border-slate-100">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#64748B] text-sm">ABC Healthcare</span>
                    <span className="text-[#1E293B] text-sm font-medium">$80.00</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Review and Pay Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-6 h-6 bg-[#4169E1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-semibold">1</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-[#1E293B] font-semibold text-lg mb-1">Review and pay</h2>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-[#475569] text-[15px] leading-relaxed mb-1">
                    You're about to make a payment of <span className="font-semibold text-[#1E293B]">$80.00</span>
                  </p>
                  <p className="text-[#64748B] text-sm">
                    Remaining bill balance: $0.00
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-[#1E293B] text-sm font-medium">Payment method</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5 bg-[#1434CB] rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">VISA</span>
                    </div>
                    <span className="text-[#475569] text-sm">Card ending in ••••4242</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[#1E293B] text-sm font-medium">Email receipt</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#475569] text-sm">thughes@gmail.com</span>
                    <button className="text-[#4169E1] text-sm font-semibold hover:underline">
                      Edit
                    </button>
                  </div>
                </div>

                <button
                  onClick={onNext}
                  className="w-full bg-[#4169E1] text-white font-semibold text-base py-3.5 rounded-xl hover:bg-[#3557C5] transition-all shadow-sm btnpulse"
                >
                  Pay $80.00
                </button>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <Shield className="w-4 h-4 text-[#64748B]" />
                  <span className="text-sm text-[#64748B]">Secure payments</span>
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
