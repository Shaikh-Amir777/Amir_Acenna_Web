import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import consultationReducer from './consultationSlice';
import technologyReducer from './technologySlice';
import testimonialsReducer from './testimonialsSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    consultation: consultationReducer,
    technology: technologyReducer,
    testimonials: testimonialsReducer,
    modal: modalReducer,
  },
});

export default store;
