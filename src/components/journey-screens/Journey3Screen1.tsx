interface Journey3Screen1Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen1({ }: Journey3Screen1Props) {
  return (
    <div
      className="h-full w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/persona_1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
