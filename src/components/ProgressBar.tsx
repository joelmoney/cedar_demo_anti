interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex gap-2 w-full max-w-md mx-auto">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
            index < currentStep
              ? 'bg-[#4169E1]'
              : 'bg-slate-200'
          }`}
        />
      ))}
    </div>
  );
}
