import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormShema } from '../types/addCommentForm';

const initialState: AddCommentFormShema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(sendComment.pending, (state, action) => {
  //       state.error = undefined;
  //       // state.isLoading = true;
  //     })

  //     .addCase(sendComment.fulfilled, (state, action) => {
  //       // state.isLoading = false;
  //     })

  //     .addCase(sendComment.rejected, (state, action) => {
  //       // state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
