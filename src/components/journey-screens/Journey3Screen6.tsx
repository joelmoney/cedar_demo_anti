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
              <div className="px-5 py-6">
                <button className="flex items-center gap-2 text-[#64748B] text-[15px] mb-6">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View all bills
                </button>

                <h1 className="text-[28px] font-bold text-[#1E293B] leading-tight mb-8">
                  Payment summary
                </h1>

                <div className="space-y-0 mb-10">
                  <div className="flex items-center justify-between py-4 border-b border-slate-100">
                    <span className="text-[15px] text-[#64748B]">Total due</span>
                    <span className="text-[17px] font-semibold text-[#0F172A]">$470.96</span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-slate-200">
                    <span className="text-[15px] text-[#64748B]">Payment total</span>
                    <span className="text-[17px] font-semibold text-[#0F172A]">$470.96</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-[17px] font-semibold text-[#0F172A] mb-5 text-center">
                    Select payment method
                  </h2>

                  <button
                    onClick={onNext}
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 hover:bg-slate-50 transition-colors mb-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-[#4169E1] flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#4169E1]"></div>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-[15px] font-medium text-[#0F172A]">Blue Star Wallet</div>
                        <div className="text-[13px] text-[#64748B]">Health Savings Account</div>
                      </div>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0 btnpulse">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 bg-[#F8FAFC] -mx-4 -mb-4 px-4 pb-4 rounded-b-xl">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-[14px] font-semibold text-[#0F172A]">HSA/FSA balance</div>
                          <div className="text-[12px] text-[#64748B] mt-1 leading-relaxed">
                            Tax-free dollars available in your health savings accounts
                          </div>
                        </div>
                        <div className="text-[15px] font-semibold text-[#0F172A] ml-4">$600.00</div>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-[#0F172A] mb-4">
                    New payment information
                  </h3>

                  <div className="space-y-0">
                    <button className="w-full bg-white border-b border-slate-100 py-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                          <rect x="1" y="1" width="18" height="14" rx="2" stroke="#64748B" strokeWidth="1.5"/>
                          <path d="M1 5H19" stroke="#64748B" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-[#0F172A]">Credit card</span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button className="w-full bg-white border-b border-slate-100 py-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                          <path d="M2 2H18V16H2V2Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 2V16M2 6H18M2 10H18M6 2V16M14 2V16" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-[#0F172A]">Bank transfer</span>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="flex-shrink-0">
                        <path d="M1 1L7 7L1 13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <button className="w-full bg-white py-4 hover:bg-slate-50 transition-colors flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                          <path d="M9 11.5C10.1046 11.5 11 10.6046 11 9.5C11 8.39543 10.1046 7.5 9 7.5C7.89543 7.5 7 8.39543 7 9.5C7 10.6046 7.89543 11.5 9 11.5Z" fill="#0F172A"/>
                          <path d="M14 8V6C14 3.23858 11.7614 1 9 1C6.23858 1 4 3.23858 4 6V8M9 11.5V14M3 8H15C16.1046 8 17 8.89543 17 10V19C17 20.1046 16.1046 21 15 21H3C1.89543 21 1 20.1046 1 19V10C1 8.89543 1.89543 8 3 8Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-left text-[15px] text-[#0F172A]">Apple Pay</span>
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
