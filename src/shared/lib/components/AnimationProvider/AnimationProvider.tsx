import { AnimationConfig } from '@react-spring/web';
import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GetureType = typeof import('@use-gesture/react');

interface AnimationContext {
  Gesture?: GetureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContext>({});

const getAsyncAnimationModules = async () => {
  return Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContext>;
};

// Ленивая подгрузка библиотек
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GetureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Spring: SpringRef.current,
      Gesture: GestureRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
