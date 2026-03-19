interface Journey3Screen1Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen1({ }: Journey3Screen1Props) {
  return (
    <div className="h-full w-full relative overflow-hidden" style={{ backgroundColor: '#465A31' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/kora_background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
}
