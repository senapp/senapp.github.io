import { useState, useRef, useEffect, MutableRefObject } from 'react';

const useEffectInEvent = (event: 'resize' | 'scroll', useCapture: boolean, set: () => void ): void => {
    useEffect(() => {
        set();
        window.addEventListener(event, set, useCapture);
        return () => window.removeEventListener(event, set, useCapture);
    }, []);
};

export const useRect = <T extends Element>(): [
  DOMRect | undefined,
  MutableRefObject<T | null>,
  () => void
] => {
    const ref = useRef<T>(null);
    const [rect, setRect] = useState<DOMRect>();

    const set = (): void => setRect(ref.current?.getBoundingClientRect());

    useEffectInEvent('resize', false, set);
    useEffectInEvent('scroll', true, set);

    return [rect, ref, set];
};