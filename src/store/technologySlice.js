import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 'All',
  searchQuery: '',
};

export const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setActiveCategory, setSearchQuery } = technologySlice.actions;
export default technologySlice.reducer;
