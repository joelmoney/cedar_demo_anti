interface Journey3Screen3Props {
  reducedMotion?: boolean;
  onNext?: () => void;
}

export function Journey3Screen3({ }: Journey3Screen3Props) {
  return (
    <div
      className="h-full w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/persona_3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(70, 90, 49, 0.6)' }} />
    </div>
  );
}
