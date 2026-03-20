import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { ScrollVideo } from '../ScrollVideo';
import { TimedVideoOverlay } from '../TimedVideoOverlay';
import { SliderSection } from '../SliderSection';

interface PreambleScreenProps {
  onContinue: (values: Record<string, number>) => void;
  reducedMotion: boolean;
  onSliderChange?: (selectedJourney: number, score: number, overrideApplied: boolean, overrideName?: string) => void;
  onJumpToJourney?: (journeyNumber: number) => void;
  onRestart?: () => void;
}

function Section({ children, reducedMotion, direction = 'left' }: { children: ReactNode; reducedMotion: boolean; direction?: 'left' | 'right' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const initialX = direction === 'left' ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: initialX }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  );
}

export function PreambleScreen({ onContinue, reducedMotion, onSliderChange, onJumpToJourney, onRestart }: PreambleScreenProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setScrollContainer(scrollContainerRef.current);
  }, []);

  return (
    <div ref={scrollContainerRef} className="h-screen overflow-y-auto bg-white">
      <Section1 reducedMotion={reducedMotion} />
      <Section2 reducedMotion={reducedMotion} />
      <Section3 reducedMotion={reducedMotion} scrollContainer={scrollContainer} />
      <Section4 reducedMotion={reducedMotion} />
      <Section5 reducedMotion={reducedMotion} onComplete={onContinue} onSliderChange={onSliderChange} onJumpToJourney={onJumpToJourney} onRestart={onRestart} />
    </div>
  );
}

// Section 1: Hero intro with Cedar Intelligence title
function Section1({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-[1920px] h-[1080px] flex flex-col items-center justify-center px-16">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <img
            src="/images/preamble_logo.png"
            alt="Cedar Logo"
            className="mx-auto mb-[200px]"
            style={{ width: '116px', height: '56px' }}
          />
          <p className="eyebrow mb-8" style={{ color: '#6E6E6E' }}>CEDAR INTELLIGENCE</p>
          <h1 className="headline mb-8" style={{ color: '#2D3A20' }}>
            The financial intelligence healthcare has been waiting for
          </h1>
          <p className="bodycopy max-w-3xl mx-auto" style={{ color: '#6E6E6E' }}>
            Cedar Intelligence brings together deep healthcare financial data, advanced learning models, and proven behavioral science to predict patient needs and personalize every interaction—understanding the nuances of billing, coverage, approvals, and affordability to drive real-world, higher digital payments for more than 300 health systems and 55 million patients.
          </p>
          <p className="bodycopy max-w-3xl mx-auto mt-6" style={{ color: '#6E6E6E' }}>
            It powers Cedar's ability to intelligently optimize every patient touchpoint, from when a message is sent to the channels patients prefer, to personalizing the patient payment experience. It automatically tailors digital payments to check any intelligent metric again.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mt-12"
          >
            <ArrowDown className="w-8 h-8" style={{ color: '#2D5F50' }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Section 2: Patient responsibility statistics with video
function Section2({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const target1 = 64;
    const target2 = 25;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount1(target1);
        setCount2(target2);
        clearInterval(timer);
      } else {
        setCount1(Math.round((target1 / steps) * currentStep));
        setCount2(Math.round((target2 / steps) * currentStep));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
   <div ref={ref} className="w-full flex items-center justify-center" style={{ backgroundColor: '#2D5F50', minHeight: '130vh' }}>
      <div className="w-full max-w-[1920px] flex items-center justify-center px-16 py-16">
        <div className="w-full flex flex-col gap-12">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="headline mb-6" style={{ color: '#A0E5CE' }}>
              Patients Now Responsible For Higher Share Of Cost
            </h2>
            <p className="subheadline" style={{ color: '#F9F8F1' }}>
              Patients are the <strong>fastest growing</strong> payer and the <strong>most expensive</strong> to collect from.
            </p>
          </motion.div>

          <div className="flex items-center justify-center mb-8">
            <div className="w-full max-w-[64rem]">
              <video
                autoPlay
                muted
                playsInline
                className="w-full rounded-3xl"
                style={{
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}
              >
                <source src="/videos/CDR_Preamb_sec2graph.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="flex items-center justify-center gap-16">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 max-w-xl"
            >
              <h3 className="headline mb-8" style={{ color: '#F9F8F1' }}>
                The Problem
              </h3>
              <div className="space-y-6 bodycopy" style={{ color: '#F9F8F1' }}>
                <p>
                  Patient responsibility is rising while commercial and government payer rules remain locked in slow-burn agreements.
                </p>
                <p>
                  Many providers are still relying on the same pay-slip like in approaches to drive patient payments.
                </p>
                <p>
                  The result: a persistent, not-yet-intelligent duct-taped mix of patient outreach and back-end reconciliation analysis for healthcare financial operations to operate.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-6"
                style={{ width: '400px' }}
              >
                <div className="text-6xl font-bold" style={{ color: '#A0E5CE', fontFamily: 'var(--font-family-serif)', flexShrink: 0 }}>
                  {count1}%
                </div>
                <p className="bodycopy" style={{ color: '#F9F8F1' }}>
                  Increase in consumers enrolled in HDHPs
                </p>
              </motion.div>

              <motion.div
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-6"
                style={{ width: '400px' }}
              >
                <div className="text-6xl font-bold" style={{ color: '#A0E5CE', fontFamily: 'var(--font-family-serif)', flexShrink: 0 }}>
                  {count2}%
                </div>
                <p className="bodycopy" style={{ color: '#F9F8F1' }}>
                  Adults who postponed getting healthcare they needed because of the cost
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Section 3: Scroll-based video with overlay text
function Section3({ reducedMotion, scrollContainer }: { reducedMotion: boolean; scrollContainer: HTMLElement | null }) {
  return (
    <div className="w-full" style={{ backgroundColor: '#0F130A' }}>
      <div className="w-full max-w-[1920px] mx-auto">
        <ScrollVideo
          videoSrc="/videos/CDR_Preamb_sec3flower.mp4"
          className="w-full"
          scrollContainer={scrollContainer}
        >
          <div className="space-y-6 max-w-2xl">
            <p className="eyebrow" style={{ color: '#F9F8F1' }}>THE SOLUTION</p>
            <h2 className="headline" style={{ color: '#F9F8F1' }}>
              Cedar Intelligence Powering the first one-of-one patient financial experience

            </h2>
            <p className="bodycopy" style={{ color: '#F9F8F1' }}>
              This is why Cedar is launching the first one-of-one patient financial experience, powered by Cedar Intelligence, its AI-powered personalization engine.
            </p>
            <p className="bodycopy" style={{ color: '#F9F8F1' }}>
              This foundational platform combines proprietary AI, cloud-based LLMs, a decade of healthcare expertise, and a dataset built from more than 1.5 billion patient interactions, $10B in processed payments, and 50 million patient journeys. Its continuous learning system evaluates 80+ patient attributes, including payment behavior, how complex bills have been, when patients engage, prior payment plan activity, conversation tone and sentiment, as well as broader economic trends. This insight identifies whether a patient needs a gentle nudge or a more proactive lifeline and dynamically orchestrates the ideal, outcome-driven journey for every patient.
            </p>
          </div>
        </ScrollVideo>
      </div>
    </div>
  );
}

// Section 4: "The Problem" with video
function Section4({ reducedMotion }: { reducedMotion: boolean }) {
  return (
     <div className="w-full flex items-center justify-center" style={{ backgroundColor: '#1B2C2C', height: '1080px' }}>
      <div className="w-full max-w-[1920px] h-[1080px] flex items-center justify-center px-16">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full"
        >
          <TimedVideoOverlay
            videoSrc="/videos/TestDataFlower_v03.5_kfEveryframe.mp4"
            videoClassName="w-full rounded-3xl"
            textPosition="above"
            textClassName="py-12"
            overlays={[
              {
                time: 0,
                duration: 3,
                content: (
                  <div className="text-center">
                    <h2 className="headline mb-4" style={{ color: '#F9F8F1' }}>
                      A Nudge or a Lifeline
                    </h2>
                    <p className="bodycopy" style={{ color: '#F9F8F1' }}>
                      Cedar Intelligence analyzes past patient interactions and payment behavior, how complex bills from large, when payment is urgent, and how financial gaps typically affect them, from post-visit payment gaps and high-cost stays, through rigorous affordability evaluations.
                    </p>
                  </div>
                ),
              },
              {
                time: 3.5,
                duration: 3,
                content: (
                  <div className="text-center">
                    <h2 className="headline mb-4" style={{ color: '#F9F8F1' }}>
                      Personalized Care
                    </h2>
                    <p className="bodycopy" style={{ color: '#F9F8F1' }}>
                      Whether a patient needs a gentle nudge or a more proactive guide, Cedar uses intelligent digital payments to check for the optimal path for that patient.
                    </p>
                  </div>
                ),
              },
              {
                time: 7,
                duration: 3,
                content: (
                  <div className="text-center">
                    <h2 className="headline mb-4" style={{ color: '#F9F8F1' }}>
                      Better Outcomes
                    </h2>
                    <p className="bodycopy" style={{ color: '#F9F8F1' }}>
                      With Cedar Intelligence providers can deliver a pay-per-one financial experience to every patient you serve, driving higher digital payments and better outcomes for both the patient and provider.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
}

// Section 5: Interactive slider section
function Section5({
  reducedMotion,
  onComplete,
  onSliderChange,
  onJumpToJourney,
  onRestart
}: {
  reducedMotion: boolean;
  onComplete: (values: Record<string, number>) => void;
  onSliderChange?: (selectedJourney: number, score: number, overrideApplied: boolean, overrideName?: string) => void;
  onJumpToJourney?: (journeyNumber: number) => void;
  onRestart?: () => void;
}) {
  return (
    <div className="w-full min-h-screen">
      <SliderSection
        reducedMotion={reducedMotion}
        onComplete={onComplete}
        onSliderChange={onSliderChange}
        showLeftPanel={true}
        onJumpToJourney={onJumpToJourney}
        onRestart={onRestart}
      />
    </div>
  );
}
