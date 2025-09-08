"use client";
import * as React from "react";

export function Countdown({ target }: { target: Date }) {
  const [now, setNow] = React.useState<Date>(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const Unit = ({ n, label }: { n: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-semibold tabular-nums">{String(n).padStart(2, "0")}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-flow-col auto-cols-max gap-6">
      <Unit n={days} label="days" />
      <Unit n={hours} label="hours" />
      <Unit n={minutes} label="mins" />
      <Unit n={seconds} label="secs" />
    </div>
  );
}

