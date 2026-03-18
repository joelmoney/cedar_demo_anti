import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Journey6Screen1Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey6Screen1({ reducedMotion = false, onNext }: Journey6Screen1Props) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-full w-full relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/J4_lockscreen.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
                src="/images/J2_mail_icon.png"
                alt="Mail"
                className="w-[22px] h-[22px] flex-shrink-0"
              />
              <span className="text-[13px] font-semibold text-slate-900">MAIL</span>
            </div>
            <span className="text-[13px] font-normal text-slate-500">now</span>
          </div>

          <div className="px-4 py-3">
            <div className="text-[15px] font-semibold text-slate-900 mb-1">
              ABC Health
            </div>
            <div className="text-[14px] font-semibold text-slate-900 mb-2">
              Your bill is ready
            </div>
            <div className="text-[14px] text-slate-700 leading-relaxed line-clamp-2">
              Hi Chris, Pay easily online You have a $80.00 balance from your visit to ABC Health System at ABC Health
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
