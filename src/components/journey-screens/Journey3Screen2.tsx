interface Journey3Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen2({ }: Journey3Screen2Props) {
  return (
    <div
      className="h-full w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/persona_2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
