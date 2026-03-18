import { useState, useEffect } from 'react';
import { ProgressBar } from '../ProgressBar';
import { JourneyHeader } from '../JourneyHeader';
import { JourneyFooter } from '../JourneyFooter';

interface Journey5Screen8Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey5Screen8({ reducedMotion = false, onNext }: Journey5Screen8Props) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const emailTarget = 'p.sterling.exec@globalcorp.com';
    const phoneTarget = '(212) 555-0112';

    let emailIndex = 0;
    let phoneIndex = 0;

    const emailTimer = setInterval(() => {
      if (emailIndex < emailTarget.length) {
        setEmail(emailTarget.slice(0, emailIndex + 1));
        emailIndex++;
      } else {
        clearInterval(emailTimer);
      }
    }, 50);

    const phoneTimer = setTimeout(() => {
      const phoneInterval = setInterval(() => {
        if (phoneIndex < phoneTarget.length) {
          setPhone(phoneTarget.slice(0, phoneIndex + 1));
          phoneIndex++;
        } else {
          clearInterval(phoneInterval);
        }
      }, 50);
    }, emailTarget.length * 50 + 300);

    return () => {
      clearInterval(emailTimer);
      clearTimeout(phoneTimer);
    };
  }, []);

  const handleSubmit = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <JourneyHeader />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="max-w-md mx-auto px-6 py-8">
          <div className="mb-12">
            <ProgressBar currentStep={1} totalSteps={8} />
          </div>

          <div className="mb-8">
            <h1 className="text-[32px] font-bold text-slate-900 mb-3 leading-tight">
              How can we contact you?
            </h1>
            <p className="text-slate-600 text-base">
              Enter your phone number or email address
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent text-base"
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent text-base"
                placeholder=""
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#4169E1] hover:bg-[#3557C5] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-base mb-6 btnpulse"
          >
            Next
          </button>

          <p className="text-center text-sm text-slate-600 mb-8">
            By continuing you agree to our{' '}
            <a href="#" className="text-[#4169E1] hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#4169E1] hover:underline">
              Privacy Policy
            </a>
          </p>

          <JourneyFooter />
        </div>
      </div>
    </div>
  );
}
