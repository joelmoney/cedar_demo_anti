import { useState } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronLeft } from 'lucide-react';

interface Journey5Screen12Props {
  reducedMotion?: boolean;
  onNext?: () => void;
  onBack?: () => void;
}

export function Journey5Screen12({ reducedMotion = false, onNext, onBack }: Journey5Screen12Props) {
  const [selected, setSelected] = useState(true);

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8">
            <ProgressBar currentStep={5} totalSteps={8} />
          </div>

          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-900 mb-8 hover:text-slate-700 transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          <div className="mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <img src="/images/J5_12_checklist.png" alt="Checklist" className="w-[72px] h-[72px] object-contain" />
            </div>
            <h1 className="text-[26px] font-bold text-slate-900 mb-4 leading-tight">
              Who is applying for health insurance?
            </h1>
            <p className="text-slate-600 text-base mb-6">
              While you must provide information about all members of your household, not all of them need to be applying for coverage
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 flex items-start gap-3">
            <div className="mt-1">
              <img src="/images/J5_10_lightbulb.png" alt="Lightbulb" className="w-[40px] h-[40px] object-contain" />
            </div>
            <div>
              <p className="text-slate-700 text-sm leading-relaxed">
                This is an application for government health coverage. You will not need to provide as much information about people who are not applying.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setSelected(!selected)}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-colors ${
                selected
                  ? 'border-[#4169E1] bg-blue-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center ${
                selected ? 'bg-[#4169E1]' : 'bg-white border-2 border-slate-300'
              }`}>
                {selected && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6 11L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="text-slate-900 font-medium text-left">Myself</span>
            </button>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-4 btnpulse"
          >
            Next
          </button>

          <button className="w-full text-slate-600 font-medium py-3">
            Skip for now
          </button>

          <div className="mt-8">
            <JourneyFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
