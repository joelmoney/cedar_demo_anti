import { useRef, useEffect, useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface Journey3Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen3({ }: Journey3Screen3Props) {
  const [showLoopingVideo, setShowLoopingVideo] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const loopingVideoRef = useRef<HTMLVideoElement>(null);

  const handleReplay = () => {
    setShowLoopingVideo(false);
    setTimeout(() => {
      if (introVideoRef.current) {
        introVideoRef.current.currentTime = 0;
        introVideoRef.current.play().catch(err => console.error('Error replaying video:', err));
      }
    }, 50);
  };

  useEffect(() => {
    const introVideo = introVideoRef.current;
    if (!introVideo) return;

    introVideo.volume = 1.0;

    const handleEnded = () => {
      setShowLoopingVideo(true);
    };

    introVideo.addEventListener('ended', handleEnded);
    introVideo.play().catch(err => console.error('Error playing intro video:', err));

    return () => {
      introVideo.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (showLoopingVideo && loopingVideoRef.current) {
      loopingVideoRef.current.volume = 1.0;
      loopingVideoRef.current.play().catch(err => console.error('Error playing looping video:', err));
    }
  }, [showLoopingVideo]);

  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/persona_3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div
          className="w-[300px] h-[300px] rounded-[20px] overflow-hidden"
          style={{
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}
        >
          {!showLoopingVideo && (
            <video
              ref={introVideoRef}
              className="w-full h-full object-cover"
              playsInline
            >
              <source src="/videos/kora_cedarintel_p3.mp4" type="video/mp4" />
            </video>
          )}
          {showLoopingVideo && (
            <video
              ref={loopingVideoRef}
              className="w-full h-full object-cover"
              playsInline
              loop
            >
              <source src="/videos/kora_cedarintel_resting.mp4" type="video/mp4" />
            </video>
          )}
        </div>
        <button
          onClick={handleReplay}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Replay video"
        >
          <RotateCcw size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
