import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '@/features/ScrollSafe';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(function Page(props: PageProps) {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    console.log(wrapperRef.current);
    console.log(scrollPosition);
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(uiActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
  }, 500);

  return (
    <main data-testid={props['data-testid'] ?? 'Page'} ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll} id={PAGE_ID}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
