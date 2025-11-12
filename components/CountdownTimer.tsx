import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 48);
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-4 text-center">
        <div>
          <div className="text-4xl font-bold">48</div>
          <div className="text-sm opacity-90">Hours</div>
        </div>
        <div className="text-4xl font-bold">:</div>
        <div>
          <div className="text-4xl font-bold">00</div>
          <div className="text-sm opacity-90">Minutes</div>
        </div>
        <div className="text-4xl font-bold">:</div>
        <div>
          <div className="text-4xl font-bold">00</div>
          <div className="text-sm opacity-90">Seconds</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-4 text-center">
      <div>
        <div className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-sm opacity-90">Hours</div>
      </div>
      <div className="text-4xl font-bold">:</div>
      <div>
        <div className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-sm opacity-90">Minutes</div>
      </div>
      <div className="text-4xl font-bold">:</div>
      <div>
        <div className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-sm opacity-90">Seconds</div>
      </div>
    </div>
  );
}
