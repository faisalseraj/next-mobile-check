'use client';

import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof navigator === 'undefined') return false;

      const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        ua.toLowerCase()
      );

      setIsMobile(isMobileDevice);
    };

    checkMobile();
  }, []);

  return { isMobile };
};
