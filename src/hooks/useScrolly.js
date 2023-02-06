import { useEffect, useState } from "react";

export function useScrolly() {
    const [scrolly, setScrolly] = useState(0);

    const handleScrolly = () => {
        const scrolly = window.scrollY || document.documentElement.scrollTop;
        setScrolly(scrolly)
    }

    useEffect(() => {
        handleScrolly();
        window.addEventListener('scroll', handleScrolly);
        return () => {
            window.removeEventListener('scroll', handleScrolly);
        }
    }, []);
    return ([scrolly]);
}