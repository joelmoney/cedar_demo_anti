import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface WaveAnimationProps {
  className?: string;
}

export function WaveAnimation({ className }: WaveAnimationProps) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/videos/animation/wave_animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return <div className={className} />;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={className}
    />
  );
}
