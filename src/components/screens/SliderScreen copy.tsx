import { SliderSection } from '../SliderSection';

interface SliderScreenProps {
  onComplete: (values: Record<string, number>) => void;
  reducedMotion: boolean;
  onSliderChange?: (selectedJourney: number, score: number, overrideApplied: boolean, overrideName?: string) => void;
  showLeftPanel?: boolean;
  hasCompletedJourney?: boolean;
  onJumpToJourney?: (journeyNumber: number) => void;
  onRestart?: () => void;
}

export function SliderScreen(props: SliderScreenProps) {
  return <SliderSection {...props} />;
}
