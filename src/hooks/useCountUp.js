import { useEffect, useState } from 'react';

const easeOutQuad = (t) => t * (2 - t);
const frameDuration = 1000 / 60;

function useCountUp({ endValue, duration = 1000, onComplete }) {
  const countTo = parseInt(endValue, 10);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      return;
    }
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(Math.floor(countTo * progress));

      if (frame === totalFrames) {
        if (onComplete) {
          //Trigger passed in function
          onComplete();
        }
        clearInterval(counter);
      }
    }, frameDuration);
  }, [start]);

  return { count, setStart };
}

export default useCountUp;