import { fireEvent, screen } from '@testing-library/react';
import { Profile, profileReducer } from '@/entities/Profile';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { Country, Currency } from '@/shared/const/common';
import { EditableProfileCard } from './EditableProfileCard';
import userEvent from '@testing-library/user-event';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  id: '1',
  name: 'admin',
  lastname: 'admin',
  age: 465,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('readonly must change visible', async () => {
    //@ts-ignore
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('При отмене знаяения должны обнуляться', async () => {
    //@ts-ignore
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.name'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('');
    // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('');

    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
    // await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  test('Если нет ошибкок валидации, то на сервер должен уйти PUT запрос', async () => {
    //@ts-ignore
    componentRender(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    // Ошибка дата юзер
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    await expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('Если нет ошибкок валидации, то на сервер должен уйти PUT запрос', async () => {
    //@ts-ignore
    componentRender(<EditableProfileCard id="1" />, options);

    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.name'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
