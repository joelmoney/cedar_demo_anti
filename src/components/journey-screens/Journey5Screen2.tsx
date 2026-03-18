import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

interface Journey5Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen2({ reducedMotion = false, onNext }: Journey5Screen2Props) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full bg-white flex flex-col" onClick={onNext}>
      <div className="flex-shrink-0 bg-[#F6F6F6] border-b border-gray-200 px-2 py-2">
        <div className="flex items-center justify-between">
          <button className="p-2">
            <ChevronLeft className="w-6 h-6 text-[#007AFF]" />
          </button>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center mb-1">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-[13px] font-medium text-black">(888) 888-8888</span>
          </div>
          <div className="w-10" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pt-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showMessage ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex justify-start mb-4"
        >
          <div className="max-w-[75%]">
            <div className="bg-[#E9E9EB] rounded-[18px] px-4 py-2.5">
              <p className="text-[15px] text-black leading-[1.4]">
                ABC Health: Your estimate is ready for your visit on{' '}
                <span className="text-[#007AFF] underline">Wed, Jun 25th at 10:00am</span>
                . View and set up payment now at{' '}
                <span className="text-[#007AFF] underline">pay.abchealth.org/12738372</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex-shrink-0 bg-[#D5D8DD] border-t border-gray-200 flex items-center justify-center py-2"
      >
        <img
          src="/images/J5_keyboard.png"
          alt="Keyboard"
          className="w-[402px] h-[408px] object-contain"
        />
      </motion.div>
    </div>
  );
}
