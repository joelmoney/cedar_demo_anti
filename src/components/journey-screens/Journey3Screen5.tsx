import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Journey3Screen5Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen5({ reducedMotion = false, onNext }: Journey3Screen5Props) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={showAlert ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        className="mx-4 z-10 max-w-md w-full cursor-pointer"
        onClick={onNext}
      >
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between border-b border-slate-200/50">
            <div className="flex items-center gap-2">
              <img
                src="/images/messages_icon.png"
                alt="Messages"
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-[13px] font-semibold text-slate-900">MESSAGES</span>
            </div>
            <span className="text-[13px] font-normal text-slate-500">now</span>
          </div>

          <div className="px-4 py-3">
            <div className="text-[15px] font-semibold text-slate-900 mb-1">
              ABC Health
            </div>
            <div className="text-[14px] text-slate-700 leading-relaxed mb-2">
              Good morning, Juliana! You have funds available in your Blue Star HSA account ending in **1234 that you can put towards paying your outstanding balance. Log in for more information: <a href="#" className="text-[#007AFF] font-medium">abchealthsystem.org</a>.
            </div>
            <div className="text-[14px] text-slate-500">
              Reply "STOP" to unsubscribe.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
