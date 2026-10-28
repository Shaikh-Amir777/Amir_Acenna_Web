import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  totalItems: 4,
};

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.totalItems;
    },
    prevSlide: (state) => {
      state.currentIndex = (state.currentIndex - 1 + state.totalItems) % state.totalItems;
    },
    setSlide: (state, action) => {
      state.currentIndex = action.payload;
    },
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, setSlide, setTotalItems } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
