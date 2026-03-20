import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey3Screen7Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen7({ reducedMotion = false, onNext }: Journey3Screen7Props) {
  return (
    <div className="h-full w-full flex flex-col bg-[#F8F9FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-md mx-auto bg-white min-h-full flex flex-col">
          <div className="flex-1 px-5 py-6">
            <button className="flex items-center gap-1.5 text-[#64748B] text-[14px] mb-5">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View all bills
            </button>

            <h1 className="text-[28px] font-bold text-[#1E1B4B] leading-tight mb-5" style={{ fontFamily: 'Rethink Sans, system-ui, sans-serif' }}>
              Payment summary
            </h1>

            <div className="space-y-0 mb-6">
              <div className="flex items-center justify-between py-3">
                <span className="text-[15px] text-[#64748B]">Total due</span>
                <span className="text-[16px] font-semibold text-[#0F172A]">$470.96</span>
              </div>
              <div className="h-px bg-[#E2E8F0]"></div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[15px] text-[#64748B]">Payment total</span>
                <span className="text-[16px] font-semibold text-[#0F172A]">$470.96</span>
              </div>
              <div className="h-px bg-[#E2E8F0]"></div>
            </div>

            <div className="mb-5">
              <h2 className="text-[15px] font-semibold text-[#0F172A] mb-3 text-center">
                Select payment method
              </h2>

              <button
                onClick={onNext}
                className="w-full bg-white border border-[#E2E8F0] rounded-xl p-3.5 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <img src="/images/bluestar_logo.png" alt="Blue Star" className="w-6 h-6 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="text-[14px] font-semibold text-[#0F172A]">Blue Star Wallet</div>
                    <div className="text-[12px] text-[#64748B]">Health Savings Account</div>
                  </div>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0 btnpulse">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="pt-2.5 border-t border-[#E2E8F0] bg-[#F8FAFC] -mx-3.5 -mb-3.5 px-3.5 pb-3.5 rounded-b-xl">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold text-[#0F172A] mb-0.5">HSA/FSA balance</div>
                      <div className="text-[10px] text-[#64748B] leading-snug">
                        Tax-free dollars available in<br />your health savings accounts
                      </div>
                    </div>
                    <div className="text-[14px] font-semibold text-[#0F172A]">$600.00</div>
                  </div>
                </div>
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-[13px] font-semibold text-[#0F172A] mb-2.5">
                New payment information
              </h3>

              <div className="space-y-0">
                <button className="w-full bg-white py-3.5 hover:bg-slate-50 transition-colors flex items-center gap-2.5">
                  <img src="/images/creditcard_icon.svg" alt="Credit card" className="w-6 h-6 flex-shrink-0" />
                  <span className="flex-1 text-left text-[14px] text-[#475569]">Credit card</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="h-px bg-[#E2E8F0]"></div>

                <button className="w-full bg-white py-3.5 hover:bg-slate-50 transition-colors flex items-center gap-2.5">
                  <img src="/images/bank_icon.svg" alt="Bank" className="w-6 h-6 flex-shrink-0" />
                  <span className="flex-1 text-left text-[14px] text-[#475569]">Bank transfer</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="h-px bg-[#E2E8F0]"></div>

                <button className="w-full bg-white py-3.5 hover:bg-slate-50 transition-colors flex items-center gap-2.5">
                  <img src="/images/apple_logo.png" alt="Apple Pay" className="w-6 h-6 flex-shrink-0" />
                  <span className="flex-1 text-left text-[14px] text-[#475569]">Apple Pay</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
