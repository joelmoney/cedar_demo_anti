import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sliderOptions } from '../../config/journeys';

interface PersonaScreenProps {
  persona: {
    name: string;
    age: number;
    dob: string;
    occupation: string;
    location: string;
    hometown: string;
    bio: string;
    imageUrl: string;
  };
  leftPanelContent: {
    tagline: string;
    headline: string;
    body: string;
    buttonText: string;
  };
  onContinue: () => void;
  reducedMotion: boolean;
  userSliderValues?: Record<string, number> | null;
}

export function PersonaScreen({
  persona,
  leftPanelContent,
  onContinue,
  reducedMotion,
  userSliderValues
}: PersonaScreenProps) {
  console.log('PersonaScreen - userSliderValues:', userSliderValues);
  console.log('PersonaScreen - userSliderValues is truthy?', !!userSliderValues);
  console.log('PersonaScreen - keys count:', userSliderValues ? Object.keys(userSliderValues).length : 0);

  return (
    <div className="h-full w-full flex">
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-2/5 flex items-center justify-center p-12"
        style={{ backgroundColor: '#F9F8F1' }}
      >
        <div className="max-w-lg text-left">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <p className="eyebrow mb-3">
              PATIENT PROFILE
            </p>
            <h1 className="headline mt-4 mb-4">
              {leftPanelContent.headline}
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-6 mb-6">
              <div>
                <p className="eyebrow">AGE:</p>
                <p className="text-lg font-semibold" style={{ color: '#2D3A20' }}>{persona.age}</p>
              </div>
              <div>
                <p className="eyebrow">DOB:</p>
                <p className="text-lg font-semibold" style={{ color: '#2D3A20' }}>{persona.dob}</p>
              </div>
              <div>
                <p className="eyebrow">HOMETOWN:</p>
                <p className="text-lg font-semibold" style={{ color: '#2D3A20' }}>{persona.hometown}</p>
              </div>
            </div>
            <p className="bodycopy mt-6 mb-6">
              {persona.bio}
            </p>
          </motion.div>

          {userSliderValues && Object.keys(userSliderValues).length > 0 && (
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2.5 mb-6"
              style={{ maxWidth: '80%' }}
            >
              <p className="eyebrow mb-3">
                Your Patient Profile
              </p>
              {sliderOptions.map((option) => {
                const rawValue = userSliderValues[option.id];
                console.log(`Option ${option.id}: rawValue=${rawValue}, max=${option.max}`);
                if (rawValue === undefined) return null;

                const percentage = (rawValue / option.max) * 100;
                const segmentLabel = option.segmentLabels?.[rawValue] || '';

                return (
                  <div key={option.id} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium" style={{ fontFamily: 'Rethink Sans, sans-serif', color: '#2D3A20' }}>
                        {option.label}
                      </span>
                      <span className="text-sm font-medium" style={{ color: '#6E6E6E' }}>
                        {segmentLabel}
                      </span>
                    </div>
                    <div className="relative h-1.5 rounded-full bg-gray-200">
                      <motion.div
                        initial={reducedMotion ? { width: `${Math.max(percentage, 8)}%` } : { width: '0%' }}
                        animate={{ width: `${Math.max(percentage, 8)}%` }}
                        transition={{ duration: 0.6, delay: 0.3 + (sliderOptions.indexOf(option) * 0.05), ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-0 bottom-0 rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #81796A 0%, #58AFC8 19.71%, #D5EE8A 62.5%, #E1F7C6 96.15%)',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          <motion.button
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={onContinue}
            className="outlinebutton flex items-center gap-3"
          >
            <span>{leftPanelContent.buttonText}</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-3/5 relative overflow-hidden"
      >
        <img
          src={persona.imageUrl}
          alt={persona.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </div>
  );
}
