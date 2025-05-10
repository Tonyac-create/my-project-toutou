import { useEffect, useState, RefObject } from 'react';

export function useInView(ref: RefObject<Element | null>) {
    const [hasBeenSeen, setHasBeenSeen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasBeenSeen(true);
                    // Une fois que l'élément a été vu, on arrête d'observer
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef && !hasBeenSeen) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, hasBeenSeen]);

    return hasBeenSeen;
}
