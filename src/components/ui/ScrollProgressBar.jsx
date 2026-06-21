import useScrollProgress from '../../hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-gold-sheen animate-shimmer"
        style={{ width: `${progress}%`, backgroundSize: '200% auto' }}
      />
    </div>
  );
}
