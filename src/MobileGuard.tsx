'use client';

import { ReactNode } from 'react';
import { useIsMobile } from './useIsMobile';

interface MobileGuardProps {
  children: ReactNode;
  fallback?: ReactNode; // User can pass any fallback component
}

export const MobileGuard = ({ children, fallback }: MobileGuardProps) => {
  const { isMobile } = useIsMobile();

  if (!isMobile) {
    return (
      fallback || (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '1rem',
            textAlign: 'center'
          }}
        >
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            This page can only be accessed on a mobile device. Please open it from your phone.
          </p>
        </div>
      )
    );
  }

  return <>{children}</>;
};
