import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface Journey4Screen6Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey4Screen6({ reducedMotion = false, onNext }: Journey4Screen6Props) {
  const [selectedMethod, setSelectedMethod] = useState<string>('saved-card');
  const [isPaymentSummaryExpanded, setIsPaymentSummaryExpanded] = useState(false);

  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide relative">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-4 pb-6">
          <div className="space-y-4">
            {/* Payment Summary Card */}
            <button
              onClick={() => setIsPaymentSummaryExpanded(!isPaymentSummaryExpanded)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between hover:border-[#4169E1] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                  <img src="/images/credit-card.png" alt="" className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[#1E293B] font-semibold text-sm">Payment summary</div>
                  <div className="text-[#64748B] text-sm">Paying today: $66.66</div>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#64748B] transition-transform ${
                  isPaymentSummaryExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Step 1: Payment method */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4169E1] text-white flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h2 className="text-lg font-bold text-[#1E293B]">Payment method</h2>
              </div>

              {/* Saved payment information */}
              <div className="space-y-3">
                <div className="text-[#475569] text-sm font-semibold">Saved payment information</div>

                <button
                  onClick={() => setSelectedMethod('saved-card')}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all flex items-center justify-between ${
                    selectedMethod === 'saved-card'
                      ? 'border-[#4169E1] shadow-sm'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedMethod === 'saved-card'
                          ? 'border-[#4169E1]'
                          : 'border-[#CBD5E1]'
                      }`}
                    >
                      {selectedMethod === 'saved-card' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4169E1]"></div>
                      )}
                    </div>
                    <img src="/images/Visa.png" alt="Visa" className="w-8 h-6 object-contain" />
                    <span className="text-[#1E293B] font-medium text-sm">Card •••• 5464</span>
                  </div>
                  <button className="p-1 hover:bg-[#FEE2E2] rounded transition-colors">
                    <img src="/images/trash.png" alt="Delete" className="w-5 h-5" />
                  </button>
                </button>
              </div>

              {/* Other payment options */}
              <div className="space-y-3 mt-4">
                <div className="text-[#475569] text-sm font-semibold">Other payment options</div>

                <motion.button
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={() => setSelectedMethod('debit-credit')}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all flex items-center ${
                    selectedMethod === 'debit-credit'
                      ? 'border-[#4169E1] shadow-sm'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedMethod === 'debit-credit'
                        ? 'border-[#4169E1]'
                        : 'border-[#CBD5E1]'
                    }`}
                  >
                    {selectedMethod === 'debit-credit' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4169E1]"></div>
                    )}
                  </div>
                  <img src="/images/credit-card.png" alt="" className="w-5 h-5 mr-3" />
                  <span className="text-[#1E293B] font-medium text-sm">Debit or credit card</span>
                </motion.button>

                <motion.button
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onClick={() => setSelectedMethod('hsa-fsa')}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all flex items-center ${
                    selectedMethod === 'hsa-fsa'
                      ? 'border-[#4169E1] shadow-sm'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedMethod === 'hsa-fsa'
                        ? 'border-[#4169E1]'
                        : 'border-[#CBD5E1]'
                    }`}
                  >
                    {selectedMethod === 'hsa-fsa' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4169E1]"></div>
                    )}
                  </div>
                  <img src="/images/hba-card.png" alt="" className="w-5 h-5 mr-3" />
                  <span className="text-[#1E293B] font-medium text-sm">HSA, FSA, or HRA</span>
                </motion.button>

                <motion.button
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  onClick={() => setSelectedMethod('bank')}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all flex items-center ${
                    selectedMethod === 'bank'
                      ? 'border-[#4169E1] shadow-sm'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedMethod === 'bank'
                        ? 'border-[#4169E1]'
                        : 'border-[#CBD5E1]'
                    }`}
                  >
                    {selectedMethod === 'bank' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4169E1]"></div>
                    )}
                  </div>
                  <svg className="w-5 h-5 mr-3 text-[#1E293B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v3h20V7l-10-5zM4 12v8h2v-8H4zm4 0v8h2v-8H8zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zM2 22h20v-2H2v2z"/>
                  </svg>
                  <span className="text-[#1E293B] font-medium text-sm">Bank</span>
                </motion.button>

                <motion.button
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setSelectedMethod('apple-pay')}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all flex items-center ${
                    selectedMethod === 'apple-pay'
                      ? 'border-[#4169E1] shadow-sm'
                      : 'border-[#E2E8F0]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedMethod === 'apple-pay'
                        ? 'border-[#4169E1]'
                        : 'border-[#CBD5E1]'
                    }`}
                  >
                    {selectedMethod === 'apple-pay' && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#4169E1]"></div>
                    )}
                  </div>
                  <img src="/images/ApplePay.png" alt="Apple Pay" className="h-5 w-auto mr-3" />
                  <span className="text-[#1E293B] font-medium text-sm">Apple Pay</span>
                </motion.button>
              </div>

              {/* Continue button */}
              <button
                onClick={onNext}
                className="w-full bg-[#4169E1] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#3557C5] transition-colors shadow-sm mt-6 btnpulse"
              >
                Continue
              </button>

              {/* Or pay with */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
                <span className="text-[#64748B] text-sm">or pay with</span>
                <div className="flex-1 h-px bg-[#E2E8F0]"></div>
              </div>

              {/* Payment buttons */}
              <div className="flex gap-3 justify-center">
                <img src="/images/pay_buttons.png" alt="Payment options" className="h-12 w-auto" />
              </div>

              {/* Secure payments */}
              <div className="flex items-center justify-center gap-2 text-[#64748B] text-sm mt-6">
                <img src="/images/lock.png" alt="" className="w-4 h-4" />
                <span>Secure payments</span>
              </div>
            </div>

            {/* Step 2: Payment information */}
            <div className="space-y-3 opacity-50 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#CBD5E1] text-[#64748B] flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h2 className="text-lg font-bold text-[#64748B]">Payment information</h2>
              </div>
            </div>

            {/* Step 3: Review and pay */}
            <div className="space-y-3 opacity-50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#CBD5E1] text-[#64748B] flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h2 className="text-lg font-bold text-[#64748B]">Review and pay</h2>
              </div>
            </div>
          </div>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
