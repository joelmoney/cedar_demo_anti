import { useState, useEffect } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

interface Journey5Screen10Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen10({ reducedMotion = false, onNext }: Journey5Screen10Props) {
  const [incomeExpanded, setIncomeExpanded] = useState(true);
  const [payFrequency, setPayFrequency] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [activelyReceiving, setActivelyReceiving] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setPayFrequency('monthly'), 500);
    const timer2 = setTimeout(() => setPayAmount('12500'), 1000);
    const timer3 = setTimeout(() => setStartDate('01/15/2024'), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const isFormComplete = payFrequency && payAmount && startDate;

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-2">
            <div className="mb-6">
              <ProgressBar currentStep={3} totalSteps={8} />
            </div>

            <h1 className="text-[28px] font-bold text-slate-900 leading-tight mb-4">
              Enter all your household's income on 2024
            </h1>
            <p className="text-slate-600 text-base mb-6">
              Even if the income is no longer being received or if it's expected to be received in the future
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 flex items-start gap-3">
            <img src="/images/J5_10_lightbulb.png" alt="Lightbulb" className="w-[40px] h-[40px] flex-shrink-0" />
            <p className="text-slate-700 text-sm leading-relaxed">
              If the income is from self-employment, be sure to subtract business expenses
            </p>
          </div>

          <div className="mb-6">
            <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">You</h3>
              <p className="text-sm text-slate-500 mb-1">Current monthly: $0</p>
              <p className="text-sm text-slate-500">Expected annual: $0</p>
            </div>

            <div className="bg-white border-2 border-slate-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setIncomeExpanded(!incomeExpanded)}
                className="w-full flex items-center justify-between p-4"
              >
                <span className="text-slate-900 font-medium">Income #1</span>
                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-slate-100 rounded">
                    <Trash2 size={18} className="text-slate-500" />
                  </button>
                  {incomeExpanded ? (
                    <ChevronUp size={20} className="text-slate-600" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-600" />
                  )}
                </div>
              </button>

              {incomeExpanded && (
                <div className="px-4 pb-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pay Frequency
                    </label>
                    <div className="relative">
                      <select
                        value={payFrequency}
                        onChange={(e) => setPayFrequency(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="annually">Annually</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={20} className="text-slate-600" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Pay Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
                        $
                      </span>
                      <input
                        type="text"
                        value={payAmount}
                        onChange={(e) => setPayAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        placeholder="MM/DD/YYYY"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="14" height="13" rx="2" stroke="#64748B" strokeWidth="1.5"/>
                          <path d="M3 8H17" stroke="#64748B" strokeWidth="1.5"/>
                          <path d="M7 2V5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M13 2V5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setActivelyReceiving(!activelyReceiving)}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded flex items-center justify-center ${
                      activelyReceiving ? 'bg-[#4169E1]' : 'bg-white border-2 border-slate-300'
                    }`}>
                      {activelyReceiving && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8L6 11L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-slate-900 font-medium">Actively receiving this income</span>
                  </button>
                </div>
              )}
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 text-slate-600 hover:text-slate-900 font-medium">
              <span className="text-xl">+</span>
              <span>Add another</span>
            </button>
          </div>

          <button
            onClick={onNext}
            className={`w-full font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-8 ${
              isFormComplete
                ? 'bg-[#4169E1] hover:bg-[#3557C5] text-white cursor-pointer btnpulse'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
            disabled={!isFormComplete}
          >
            Next
          </button>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
