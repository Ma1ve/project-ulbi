import { MutableRefObject, useEffect, useRef } from 'react';

interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
  useEffect(() => {
    // Замыкаю элементы чтобы не было ошибки тк данные прилетают извне они могут затереться
    const wrapperELement = wrapperRef.current;
    const trigeerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperELement /*  document.querySelector('#scrollArea') */,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(trigeerElement);
    }

    return () => {
      if (observer && trigeerElement) {
        observer.unobserve(trigeerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
}
