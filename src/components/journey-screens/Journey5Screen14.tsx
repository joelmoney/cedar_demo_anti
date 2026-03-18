import { useState } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey5Screen14Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen14({ reducedMotion = false, onNext }: Journey5Screen14Props) {
  const [selectedOption, setSelectedOption] = useState<'exact' | 'help'>('exact');

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8">
            <ProgressBar currentStep={7} totalSteps={8} />
          </div>

          <div className="mb-12">
            <h1 className="text-[24px] font-bold text-slate-900 leading-tight">
              How well do you know the income details for this job?
            </h1>
          </div>

          <div className="space-y-4 mb-12">
            <button
              onClick={() => setSelectedOption('exact')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                selectedOption === 'exact'
                  ? 'border-[#4169E1] bg-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                selectedOption === 'exact'
                  ? 'border-[#4169E1]'
                  : 'border-slate-300'
              }`}>
                {selectedOption === 'exact' && (
                  <div className="w-3 h-3 rounded-full bg-[#4169E1]" />
                )}
              </div>
              <span className="text-slate-900 font-medium text-left">I know the exact details</span>
            </button>

            <button
              onClick={() => setSelectedOption('help')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                selectedOption === 'help'
                  ? 'border-[#4169E1] bg-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                selectedOption === 'help'
                  ? 'border-[#4169E1]'
                  : 'border-slate-300'
              }`}>
                {selectedOption === 'help' && (
                  <div className="w-3 h-3 rounded-full bg-[#4169E1]" />
                )}
              </div>
              <span className="text-slate-900 font-medium text-left">I could use some help figuring out the details</span>
            </button>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-8 btnpulse"
          >
            Next
          </button>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
