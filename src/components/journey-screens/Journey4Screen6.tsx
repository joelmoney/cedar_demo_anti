import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey4Screen6Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen6({ reducedMotion = false, onNext }: Journey4Screen6Props) {
  const [showContent, setShowContent] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState<'monthly' | 'biweekly'>('monthly');
  const [autoAdd, setAutoAdd] = useState(false);
  const [showViewMore, setShowViewMore] = useState(false);

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
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h1 className="text-[#1E293B] font-bold text-2xl mb-3">Create a payment plan</h1>
              <p className="text-[#475569] text-[15px] leading-relaxed">
                Our automatic payment plans are interest-free and can be cancelled anytime until the total{' '}
                <span className="font-semibold text-[#1E293B]">$1,000.00</span> is paid.
              </p>
            </div>

            {/* Installment Terms Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#1E293B] text-base font-semibold mb-1">Installment terms</p>
                  <p className="text-sm text-[#64748B]">0% interest</p>
                </div>
                <div className="text-right">
                  <span className="text-[#1E293B] text-base font-semibold">$66.66 monthly</span>
                </div>
              </div>
            </div>

            {/* Choose Plan Details Section */}
            <div className="space-y-5 pt-2">
              <h2 className="text-[#1E293B] font-semibold text-lg">Choose your plan details</h2>

              {/* How Often */}
              <div className="space-y-3">
                <label className="block text-[#1E293B] text-[15px] font-medium">
                  How often do you want to pay?
                </label>

                <div className="flex gap-3">
                  {/* Monthly Button */}
                  <button
                    onClick={() => setSelectedFrequency('monthly')}
                    className={`flex-1 px-5 py-3 rounded-lg font-semibold text-[15px] transition-all ${
                      selectedFrequency === 'monthly'
                        ? 'bg-[#4169E1] text-white shadow-sm'
                        : 'bg-white text-[#1E293B] border border-slate-200'
                    }`}
                  >
                    Monthly
                  </button>

                  {/* Every Two Weeks Button */}
                  <button
                    onClick={() => setSelectedFrequency('biweekly')}
                    className={`flex-1 px-5 py-3 rounded-lg font-semibold text-[15px] transition-all ${
                      selectedFrequency === 'biweekly'
                        ? 'bg-[#4169E1] text-white shadow-sm'
                        : 'bg-white text-[#1E293B] border border-slate-200'
                    }`}
                  >
                    Every two weeks
                  </button>
                </div>
              </div>

              {/* Choose Length */}
              <div className="space-y-3">
                <label className="block text-[#1E293B] text-[15px] font-medium">
                  Choose the length of your plan
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3.5 text-[15px] text-[#1E293B] bg-white border border-slate-200 rounded-lg appearance-none focus:outline-none focus:border-[#4169E1] focus:ring-1 focus:ring-[#4169E1] transition-colors cursor-pointer">
                    <option>15 payments of $66.66</option>
                    <option>10 payments of $100.00</option>
                    <option>20 payments of $50.00</option>
                    <option>5 payments of $200.00</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B] pointer-events-none" />
                </div>
              </div>

              {/* Auto-add Checkbox */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => setAutoAdd(!autoAdd)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      autoAdd
                        ? 'bg-[#4169E1] border-[#4169E1]'
                        : 'bg-white border-[#CBD5E1]'
                    }`}
                  >
                    {autoAdd && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <p className="text-[#1E293B] text-[15px] font-medium mb-1">
                      Auto-add new bills to this plan
                    </p>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      We'll automatically add any new bills to your plan and save you the hassle.
                    </p>
                    {showViewMore ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 text-[#64748B] text-sm leading-relaxed"
                      >
                        <p>
                          This feature ensures that all future bills from this provider are automatically included in your payment plan,
                          helping you maintain consistent payments without manual updates.
                        </p>
                      </motion.div>
                    ) : null}
                    <button
                      onClick={() => setShowViewMore(!showViewMore)}
                      className="text-[#4169E1] text-sm font-semibold mt-1 hover:underline"
                    >
                      {showViewMore ? 'View less' : 'View more'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm btnpulse"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
