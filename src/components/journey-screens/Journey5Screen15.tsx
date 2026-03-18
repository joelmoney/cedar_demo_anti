import { useState } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { ChevronDown, ChevronUp, Home, DollarSign, CreditCard, FileText, Users, Building, File, Check, CreditCard as Edit } from 'lucide-react';

interface Journey5Screen15Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen15({ reducedMotion = false, onNext }: Journey5Screen15Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedItems = [
    { icon: Home, label: 'Household', completed: true },
    { icon: DollarSign, label: 'Income', completed: true },
    { icon: CreditCard, label: 'Expenses', completed: true },
    { icon: FileText, label: 'Existing Health Coverage', completed: true },
    { icon: Users, label: 'Absent Family Members', completed: true },
    { icon: Building, label: 'Assets', completed: true },
    { icon: File, label: 'Documents', completed: true },
  ];

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-8">
            <ProgressBar currentStep={8} totalSteps={8} />
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-8 text-center">
            <div className="mb-6 flex justify-center">
              <img src="/images/J5_15_illustration.png" alt="Completed" className="w-[120px] h-[120px] object-contain" />
            </div>
            <h1 className="text-[24px] font-bold text-slate-900 mb-3 leading-tight">
              You're all set!
            </h1>
            <p className="text-slate-600 text-base">
              You've completed all the steps, Review and submit your application.
            </p>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-8 btnpulse"
          >
            Submit Application
          </button>

          <div className="mb-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                  Completed
                </span>
                <span className="text-slate-600 text-sm font-medium">9</span>
              </div>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-3">
                {completedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} className="text-slate-500" />
                      <span className="text-slate-900 font-medium">{item.label}</span>
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    </div>
                    <button className="text-slate-500 hover:text-slate-700">
                      <Edit size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
