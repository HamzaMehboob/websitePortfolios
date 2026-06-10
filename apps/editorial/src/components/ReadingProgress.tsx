import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);

    const onScroll = () => {
      const article = document.getElementById('article-body');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      mq.removeEventListener('change', onChange);
    };
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 w-full bg-stone-200"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
