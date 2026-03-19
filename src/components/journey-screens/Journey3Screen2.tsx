interface Journey3Screen2Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen2({ }: Journey3Screen2Props) {
  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/persona_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />
    </div>
  );
}
