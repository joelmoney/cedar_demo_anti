import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey3Screen7Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen7({ reducedMotion = false, onNext }: Journey3Screen7Props) {
  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/kora_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />

      <div className="absolute inset-0 flex flex-col">
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
                  <div className="w-5 h-5 rounded-full border-2 border-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></div>
                  </div>
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
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                      <rect x="0.5" y="0.5" width="19" height="13" rx="1.5" stroke="#64748B" strokeWidth="1"/>
                      <path d="M0 4H20" stroke="#64748B" strokeWidth="1"/>
                    </svg>
                  </div>
                  <span className="flex-1 text-left text-[14px] text-[#475569]">Credit card</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="h-px bg-[#E2E8F0]"></div>

                <button className="w-full bg-white py-3.5 hover:bg-slate-50 transition-colors flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M1 1H19V15H1V1Z" stroke="#64748B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 1V15M1 5H19M1 9H19M5 1V15M15 1V15" stroke="#64748B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="flex-1 text-left text-[14px] text-[#475569]">Bank transfer</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="h-px bg-[#E2E8F0]"></div>

                <button className="w-full bg-white py-3.5 hover:bg-slate-50 transition-colors flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path d="M12 7V5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5V7M2 7H14C15.1046 7 16 7.89543 16 9V18C16 19.1046 15.1046 20 14 20H2C0.89543 20 0 19.1046 0 18V9C0 7.89543 0.89543 7 2 7Z" stroke="#64748B" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
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
    </div>
  );
}
