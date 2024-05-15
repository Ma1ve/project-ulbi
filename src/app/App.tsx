import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';

import { Outlet, Route, Routes } from 'react-router-dom';
// Тут импорт относительно ts config
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { getUserAuthData, getUserInited, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';


const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  // const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  //! Тут роуты должны передаваться в Routers чтобы помот там отображаться {routes.map({elemtnt,,......})}
  // const isAuth = useSelector(getUserAuthData);

  // const routes = useMemo(() => {
  //   return Object.values(RouteConfig).filter((route) => {
  //     if (route.authOnly && !isAuth) {
  //       return false;
  //     }

  //     return true;
  //   });
  // }, [isAuth]);
  //!

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Navbar />

      <div className="content-page">
        <Sidebar />
        <Outlet />
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default App;
