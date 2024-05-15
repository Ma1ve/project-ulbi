import {createSlice, PayloadAction} from '@reduxjs/toolkit';
  
  import { ArticleRecommendationsListSchema } from '../types/articleRecommendationsList'
  
  const initialState: ArticleRecommendationsListSchema = {

  }

  export const articleRecommendationsListSlice = createSlice({
    name: 'articleRecommendationsList',
    initialState,
    reducers: {
      template: (state, action: PayloadAction<string>) => {}
    },
  },
  // extraReducers: (builder) => {
  //   builder
      // .addCase(.pending, (state) => {
      //   state.error = undefined;
      //   state.isLoading = true;
      // })

      // .addCase(.fulfilled, (state, action: PayloadAction<Profile>) => {
      //   state.isLoading = false;
      //   state.data = action.payload;
      //   state.form = action.payload;
      // })

      // .addCase(.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.error = action.payload;
      // })
     
  // },

)
  
export const { actions: articleRecommendationsListActions } = articleRecommendationsListSlice;
export const { reducer: articleRecommendationsListReducer } = articleRecommendationsListSlice;