import { useState } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey5Screen13Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen13({ reducedMotion = false, onNext }: Journey5Screen13Props) {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no'>('yes');

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8">
            <ProgressBar currentStep={6} totalSteps={8} />
          </div>

          <div className="mb-12">
            <h1 className="text-[24px] font-bold text-slate-900 leading-tight">
              Did Preston receive any work income in 2025, or will Preston receive work income in 2025?
            </h1>
          </div>

          <div className="space-y-4 mb-12">
            <button
              onClick={() => setSelectedOption('yes')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                selectedOption === 'yes'
                  ? 'border-[#4169E1] bg-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                selectedOption === 'yes'
                  ? 'border-[#4169E1]'
                  : 'border-slate-300'
              }`}>
                {selectedOption === 'yes' && (
                  <div className="w-3 h-3 rounded-full bg-[#4169E1]" />
                )}
              </div>
              <span className="text-slate-900 font-medium text-left">Yes</span>
            </button>

            <button
              onClick={() => setSelectedOption('no')}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                selectedOption === 'no'
                  ? 'border-[#4169E1] bg-white'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                selectedOption === 'no'
                  ? 'border-[#4169E1]'
                  : 'border-slate-300'
              }`}>
                {selectedOption === 'no' && (
                  <div className="w-3 h-3 rounded-full bg-[#4169E1]" />
                )}
              </div>
              <span className="text-slate-900 font-medium text-left">No</span>
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
