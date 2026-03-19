import { useRef, useEffect, useState } from 'react';

interface Journey3Screen1Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen1({ }: Journey3Screen1Props) {
  const [showLoopingVideo, setShowLoopingVideo] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const loopingVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const introVideo = introVideoRef.current;
    if (!introVideo) return;

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
      loopingVideoRef.current.play().catch(err => console.error('Error playing looping video:', err));
    }
  }, [showLoopingVideo]);

  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/persona_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />

      <div className="absolute inset-0 flex items-center justify-center">
        {!showLoopingVideo && (
          <video
            ref={introVideoRef}
            className="max-w-full max-h-full"
            muted
            playsInline
          >
            <source src="/videos/kora_cedarintel_p1.mp4" type="video/mp4" />
          </video>
        )}
        {showLoopingVideo && (
          <video
            ref={loopingVideoRef}
            className="max-w-full max-h-full"
            muted
            playsInline
            loop
          >
            <source src="/videos/kora_cedarintel_resting.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
