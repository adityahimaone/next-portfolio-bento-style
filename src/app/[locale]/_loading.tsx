'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '../../../public/animations/loader.json';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="h-screen">
      {isMounted && (
        <Player autoplay loop src={Animation} className="h-full w-full" />
      )}
    </div>
  );
}
