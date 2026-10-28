import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    phone: '',
    service: 'Data & Analytics',
    message: '',
  },
  errors: {},
  isSubmitting: false,
  isSubmitted: false,
  successMessage: '',
};

export const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
    startSubmission: (state) => {
      state.isSubmitting = true;
    },
    submissionSuccess: (state, action) => {
      state.isSubmitting = false;
      state.isSubmitted = true;
      state.successMessage = action.payload || 'Thank you! Our enterprise data architect will reach out within 24 hours.';
    },
    submissionError: (state) => {
      state.isSubmitting = false;
    },
    resetConsultationForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isSubmitting = false;
      state.isSubmitted = false;
      state.successMessage = '';
    },
  },
});

export const {
  updateField,
  setErrors,
  clearErrors,
  startSubmission,
  submissionSuccess,
  submissionError,
  resetConsultationForm,
} = consultationSlice.actions;

export default consultationSlice.reducer;
