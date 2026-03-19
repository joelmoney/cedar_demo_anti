import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { JourneyStep } from '../../config/journeys';
import { useState, useEffect } from 'react';
import { Journey1Screen1 } from '../journey-screens/Journey1Screen1';
import { Journey1Screen2 } from '../journey-screens/Journey1Screen2';
import { Journey1Screen3 } from '../journey-screens/Journey1Screen3';
import { Journey1Screen4 } from '../journey-screens/Journey1Screen4';
import { Journey1Screen5 } from '../journey-screens/Journey1Screen5';
import { Journey1Screen6 } from '../journey-screens/Journey1Screen6';
import { Journey1Screen7 } from '../journey-screens/Journey1Screen7';
import { Journey2Screen1 } from '../journey-screens/Journey2Screen1';
import { Journey2Screen2 } from '../journey-screens/Journey2Screen2';
import { Journey2Screen3 } from '../journey-screens/Journey2Screen3';
import { Journey2Screen4 } from '../journey-screens/Journey2Screen4';
import { Journey2Screen5 } from '../journey-screens/Journey2Screen5';
import { Journey3Screen1 } from '../journey-screens/Journey3Screen1';
import { Journey3Screen2 } from '../journey-screens/Journey3Screen2';
import { Journey3Screen3 } from '../journey-screens/Journey3Screen3';
import { Journey3Screen4 } from '../journey-screens/Journey3Screen4';
import { Journey3Screen5 } from '../journey-screens/Journey3Screen5';
import { Journey3Screen6 } from '../journey-screens/Journey3Screen6';
import { Journey3Screen7 } from '../journey-screens/Journey3Screen7';
import { Journey3Screen8 } from '../journey-screens/Journey3Screen8';
import { Journey3Screen9 } from '../journey-screens/Journey3Screen9';
import { Journey4Screen1 } from '../journey-screens/Journey4Screen1';
import { Journey4Screen2 } from '../journey-screens/Journey4Screen2';
import { Journey4Screen3 } from '../journey-screens/Journey4Screen3';
import { Journey4Screen4 } from '../journey-screens/Journey4Screen4';
import { Journey4Screen5 } from '../journey-screens/Journey4Screen5';
import { Journey4Screen6 } from '../journey-screens/Journey4Screen6';
import { Journey4Screen7 } from '../journey-screens/Journey4Screen7';
import { Journey5Screen1 } from '../journey-screens/Journey5Screen1';
import { Journey5Screen2 } from '../journey-screens/Journey5Screen2';
import { Journey5Screen3 } from '../journey-screens/Journey5Screen3';
import { Journey5Screen4 } from '../journey-screens/Journey5Screen4';
import { Journey5Screen5 } from '../journey-screens/Journey5Screen5';
import { Journey5Screen6 } from '../journey-screens/Journey5Screen6';
import { Journey5Screen7 } from '../journey-screens/Journey5Screen7';
import { Journey5Screen8 } from '../journey-screens/Journey5Screen8';
import { Journey5Screen9 } from '../journey-screens/Journey5Screen9';
import { Journey5Screen10 } from '../journey-screens/Journey5Screen10';
import { Journey5Screen11 } from '../journey-screens/Journey5Screen11';
import { Journey5Screen12 } from '../journey-screens/Journey5Screen12';
import { Journey5Screen13 } from '../journey-screens/Journey5Screen13';
import { Journey5Screen14 } from '../journey-screens/Journey5Screen14';
import { Journey5Screen15 } from '../journey-screens/Journey5Screen15';
import { Journey5Screen16 } from '../journey-screens/Journey5Screen16';
import { Journey5Screen17 } from '../journey-screens/Journey5Screen17';
import { Journey5Screen18 } from '../journey-screens/Journey5Screen18';
import { Journey5Screen19 } from '../journey-screens/Journey5Screen19';
import { Journey6Screen1 } from '../journey-screens/Journey6Screen1';
import { Journey6Screen2 } from '../journey-screens/Journey6Screen2';
import { Journey6Screen3 } from '../journey-screens/Journey6Screen3';
import { Journey6Screen4 } from '../journey-screens/Journey6Screen4';
import { Journey6Screen5 } from '../journey-screens/Journey6Screen5';

interface JourneyScreenProps {
  step: JourneyStep;
  stepNumber: number;
  totalSteps: number;
  reducedMotion: boolean;
  journeyId?: string;
  onNext?: () => void;
}

export function JourneyScreen({ step, stepNumber, totalSteps, reducedMotion, journeyId, onNext }: JourneyScreenProps) {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    if (step.lottieUrl) {
      fetch(step.lottieUrl)
        .then(response => response.json())
        .then(data => setLottieData(data))
        .catch(error => console.error('Error loading Lottie animation:', error));
    } else {
      setLottieData(null);
    }
  }, [step.lottieUrl]);

  console.log('JourneyScreen - journeyId:', journeyId, 'stepNumber:', stepNumber);

  if (journeyId === 'journey1' && stepNumber === 1) {
    console.log('Rendering Journey1Screen1');
    return <Journey1Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 2) {
    console.log('Rendering Journey1Screen2');
    return <Journey1Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 3) {
    console.log('Rendering Journey1Screen3');
    return <Journey1Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 4) {
    console.log('Rendering Journey1Screen4');
    return <Journey1Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 5) {
    console.log('Rendering Journey1Screen5');
    return <Journey1Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 6) {
    console.log('Rendering Journey1Screen6');
    return <Journey1Screen6 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey1' && stepNumber === 7) {
    console.log('Rendering Journey1Screen7');
    return <Journey1Screen7 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey6' && stepNumber === 1) {
    console.log('Rendering Journey6Screen1');
    return <Journey6Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey6' && stepNumber === 2) {
    console.log('Rendering Journey6Screen2');
    return <Journey6Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey6' && stepNumber === 3) {
    console.log('Rendering Journey6Screen3');
    return <Journey6Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey6' && stepNumber === 4) {
    console.log('Rendering Journey6Screen4');
    return <Journey6Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey6' && stepNumber === 5) {
    console.log('Rendering Journey6Screen5');
    return <Journey6Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }


  if (journeyId === 'journey2' && stepNumber === 1) {
    console.log('Rendering Journey2Screen1');
    return <Journey2Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey2' && stepNumber === 2) {
    console.log('Rendering Journey2Screen2');
    return <Journey2Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey2' && stepNumber === 3) {
    console.log('Rendering Journey2Screen3');
    return <Journey2Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey2' && stepNumber === 4) {
    console.log('Rendering Journey2Screen4');
    return <Journey2Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey2' && stepNumber === 5) {
    console.log('Rendering Journey2Screen5');
    return <Journey2Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 1) {
    return <Journey3Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 2) {
    return <Journey3Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 3) {
    return <Journey3Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 4) {
    return <Journey3Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 5) {
    return <Journey3Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 6) {
    return <Journey3Screen6 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 7) {
    return <Journey3Screen7 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 8) {
    return <Journey3Screen8 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey3' && stepNumber === 9) {
    return <Journey3Screen9 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 1) {
    console.log('Rendering Journey4Screen1');
    return <Journey4Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 2) {
    console.log('Rendering Journey4Screen2');
    return <Journey4Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 3) {
    console.log('Rendering Journey4Screen3 - We value your privacy');
    return <Journey4Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 4) {
    console.log('Rendering Journey4Screen4 - Payment summary');
    return <Journey4Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 5) {
    console.log('Rendering Journey4Screen5 - Create payment plan');
    return <Journey4Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 6) {
    console.log('Rendering Journey4Screen6 - Payment method');
    return <Journey4Screen6 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey4' && stepNumber === 7) {
    console.log('Rendering Journey4Screen7 - Payment plan confirmed');
    return <Journey4Screen7 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 1) {
    console.log('Rendering Journey5Screen1');
    return <Journey5Screen1 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 2) {
    console.log('Rendering Journey5Screen2');
    return <Journey5Screen2 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 3) {
    console.log('Rendering Journey5Screen3');
    return <Journey5Screen3 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 4) {
    console.log('Rendering Journey5Screen4');
    return <Journey5Screen4 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 5) {
    console.log('Rendering Journey5Screen5');
    return <Journey5Screen5 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 6) {
    console.log('Rendering Journey5Screen6');
    return <Journey5Screen6 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 7) {
    console.log('Rendering Journey5Screen7');
    return <Journey5Screen7 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 8) {
    console.log('Rendering Journey5Screen8');
    return <Journey5Screen8 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 9) {
    console.log('Rendering Journey5Screen9');
    return <Journey5Screen9 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 10) {
    console.log('Rendering Journey5Screen10');
    return <Journey5Screen10 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 11) {
    console.log('Rendering Journey5Screen11');
    return <Journey5Screen11 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 12) {
    console.log('Rendering Journey5Screen12');
    return <Journey5Screen12 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 13) {
    console.log('Rendering Journey5Screen13');
    return <Journey5Screen13 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 14) {
    console.log('Rendering Journey5Screen14');
    return <Journey5Screen14 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 15) {
    console.log('Rendering Journey5Screen15');
    return <Journey5Screen15 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 16) {
    console.log('Rendering Journey5Screen16');
    return <Journey5Screen16 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 17) {
    console.log('Rendering Journey5Screen17');
    return <Journey5Screen17 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 18) {
    console.log('Rendering Journey5Screen18');
    return <Journey5Screen18 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (journeyId === 'journey5' && stepNumber === 19) {
    console.log('Rendering Journey5Screen19');
    return <Journey5Screen19 reducedMotion={reducedMotion} onNext={onNext} />;
  }

  if (lottieData) {
    return (
      <div className="h-full w-full bg-white overflow-y-auto scrollbar-hide">
        <Lottie
          animationData={lottieData}
          loop={true}
          autoplay={true}
          className="w-full h-auto"
        />
      </div>
    );
  }

  return (
    <div className="h-full bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          Step {stepNumber} of {totalSteps}
        </h3>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i + 1 === stepNumber ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col justify-center">
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {step.headline}
          </h2>

          {step.videoUrl && (
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source src={step.videoUrl} type="video/webm" />
              </video>
            </div>
          )}

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {step.body}
          </p>

          {step.bullets && step.bullets.length > 0 && (
            <ul className="space-y-4 mb-8">
              {step.bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + index * 0.05,
                    ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
                  }}
                  className="flex items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base text-slate-700">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {step.instruction && (
            <p className="text-sm text-slate-500 font-medium mt-8">
              {step.instruction}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
