const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(sliceName)}Schema`;

  return `import {createSlice, PayloadAction} from '@reduxjs/toolkit';
  
  import { ${typeName} } from '../types/${sliceName}'
  
  const initialState: ${typeName} = {

  }

  export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
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
  
export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;`;
};
