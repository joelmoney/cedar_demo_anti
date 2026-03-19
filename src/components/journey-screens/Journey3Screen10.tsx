import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey3Screen10Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen10({ reducedMotion = false, onNext }: Journey3Screen10Props) {
  return (
    <div className="h-full w-full bg-[#F5F7FA] overflow-y-auto scrollbar-hide relative">
      <div className="min-h-full flex flex-col">
        <JourneyHeader />

        <main className="flex-1 px-5 pt-8 pb-6 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-[#1E293B] text-center mb-3">
            Journey Complete
          </h1>
        </main>

        <JourneyFooter />
      </div>
    </div>
  );
}
