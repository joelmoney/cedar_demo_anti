import { useState } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown } from 'lucide-react';

interface Journey5Screen9Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen9({ reducedMotion = false, onNext }: Journey5Screen9Props) {
  const [selectedState, setSelectedState] = useState('New York');

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-12">
            <ProgressBar currentStep={2} totalSteps={8} />
          </div>

          <div className="mb-8">
            <h1 className="text-[28px] font-bold text-slate-900 leading-tight">
              Cool. What is your state of residency?
            </h1>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              State
            </label>
            <div className="relative">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="New York">New York</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="Florida">Florida</option>
                <option value="Illinois">Illinois</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Ohio">Ohio</option>
                <option value="Georgia">Georgia</option>
                <option value="North Carolina">North Carolina</option>
                <option value="Michigan">Michigan</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown size={20} className="text-slate-600" />
              </div>
            </div>
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
