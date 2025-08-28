'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useIsMobile } from './useIsMobile';
export const MobileGuard = ({ children, fallback }) => {
    const { isMobile } = useIsMobile();
    if (!isMobile) {
        return (fallback || (_jsx("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '1rem',
                textAlign: 'center'
            }, children: _jsx("p", { style: { fontSize: '1.2rem', fontWeight: 'bold' }, children: "This page can only be accessed on a mobile device. Please open it from your phone." }) })));
    }
    return _jsx(_Fragment, { children: children });
};
