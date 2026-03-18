import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';
import { WaveAnimation } from '../WaveAnimation';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Journey5Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen5({ reducedMotion = false, onNext }: Journey5Screen5Props) {
  const [isGenerated, setIsGenerated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGenerated(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col bg-[#F5F7FA]">
      <JourneyHeader />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="min-h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md mx-auto px-5 py-8 text-center">
              <div className="mb-6">
                {isGenerated ? (
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-[#4169E1] rounded-full flex items-center justify-center">
                      <Check className="w-14 h-14 text-white" strokeWidth={3} />
                    </div>
                  </div>
                ) : (
                  <WaveAnimation className="w-full h-auto max-w-xs mx-auto" />
                )}
              </div>
              <p className="text-lg font-bold text-[#1E293B] mb-8">
                {isGenerated ? 'Estimate generated' : 'Generating your estimate...'}
              </p>
              {isGenerated && (
                <button
                  onClick={onNext}
                  className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold text-base py-4 rounded-xl transition-colors shadow-sm btnpulse"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
          <div className="px-5 pb-6">
            <JourneyFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
