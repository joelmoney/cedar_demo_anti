interface Journey3Screen0Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen0({ }: Journey3Screen0Props) {
  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/persona_1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}
