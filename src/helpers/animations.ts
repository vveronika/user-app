import { useSpring } from 'react-spring';

export const useHeaderAnimation = () => {
    return useSpring({ opacity: 1, from: { opacity: 0 } });
};
