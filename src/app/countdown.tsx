'use client';
import { useEffect, useState } from 'react';

const LAUNCH = new Date('2026-11-19T00:00:00Z');

function plural(n: number, unit: string) {
  return `${n} ${unit}${n !== 1 ? 's' : ''}`;
}

export default function CountdownTimer() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = LAUNCH.getTime() - now;
  if (diff <= 0) return <div className="text-xl font-mono text-green-400">Launched.</div>;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {[
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="text-3xl md:text-5xl font-mono tracking-tight">{unit.value}</div>
          <div className="text-[10px] text-tertiary font-mono uppercase">{unit.label}</div>
        </div>
      ))}
    </div>
  );
}
