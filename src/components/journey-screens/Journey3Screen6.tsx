import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { MobileShell } from '../MobileShell';

interface Journey3Screen6Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen6({ reducedMotion = false, onNext }: Journey3Screen6Props) {
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
                  View all bills
                </button>

                <h1 className="text-[32px] font-bold text-[#0A2540] leading-tight mb-8">
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

                <div className="mb-6">
                  <h2 className="text-[17px] font-semibold text-slate-900 mb-4 text-center">
                    Select payment method
                  </h2>

                  <button
                    onClick={onNext}
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
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
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0 btnpulse">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100">
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
                  </button>
                </div>

                <div>
                  <h3 className="text-[14px] font-semibold text-slate-900 mb-3">
                    New payment information
                  </h3>

                  <div className="space-y-2">
                    <button className="w-full bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                          <rect x="1" y="1" width="16" height="12" rx="2" stroke="#64748B" strokeWidth="1.5"/>
                          <path d="M1 4H17" stroke="#64748B" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-slate-700">Credit card</span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button className="w-full bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                          <path d="M2 6H16M2 10H16M9 2V14M2 2H16V14H2V2Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-slate-700">Bank transfer</span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button className="w-full bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                          <path d="M8 1C5.5 1 3.5 3 3.5 5.5V7H2.5C1.95 7 1.5 7.45 1.5 8V16C1.5 16.55 1.95 17 2.5 17H13.5C14.05 17 14.5 16.55 14.5 16V8C14.5 7.45 14.05 7 13.5 7H12.5V5.5C12.5 3 10.5 1 8 1ZM8 2.5C9.65 2.5 11 3.85 11 5.5V7H5V5.5C5 3.85 6.35 2.5 8 2.5Z" fill="#64748B"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-slate-700">Apple Pay</span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MobileShell>
        </div>
      </div>

      <JourneyFooter />
    </div>
  );
}
