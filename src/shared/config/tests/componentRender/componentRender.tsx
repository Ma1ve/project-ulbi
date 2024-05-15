import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/config/types/DeepPartial';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

interface TestProvideProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProvideProps) {
  const { children, options = {} } = props;
  const { route = '/', initialState, asyncReducers } = options;
  return (
    <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}

// export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
//   const { route = '/', initialState, asyncReducers } = options;

//   return render(
//     <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
//       <MemoryRouter initialEntries={[route]}>
//         <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
//       </MemoryRouter>
//     </StoreProvider>,
//   );
// }
