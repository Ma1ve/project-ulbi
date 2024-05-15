import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validataProfileData/validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<Profile, string, ThunkConfig<ValidateProfileError[]>>('profile/updateProfileData', async (profileId, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
