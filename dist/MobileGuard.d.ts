import { ReactNode } from 'react';
interface MobileGuardProps {
    children: ReactNode;
    fallback?: ReactNode;
}
export declare const MobileGuard: ({ children, fallback }: MobileGuardProps) => string | number | bigint | true | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element;
export {};
