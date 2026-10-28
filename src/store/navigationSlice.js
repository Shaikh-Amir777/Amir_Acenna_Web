import { createSlice } from '@reduxjs/toolkit';

// Detect initial page from hash if available
const getInitialPage = () => {
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash && hash !== '') return hash;
  }
  return 'home';
};

const initialState = {
  currentPage: getInitialPage(),
  activeSection: 'home',
  isScrolled: false,
  mobileMenuOpen: false,
  activeDropdown: null,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.mobileMenuOpen = false;
      state.activeDropdown = null;
      if (typeof window !== 'undefined') {
        const hashTarget = action.payload === 'home' ? '' : `#/${action.payload}`;
        if (window.location.hash !== hashTarget) {
          window.history.pushState(null, '', hashTarget || window.location.pathname);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
    setActiveDropdown: (state, action) => {
      state.activeDropdown = action.payload;
    },
  },
});

export const { 
  setCurrentPage, 
  setActiveSection, 
  setIsScrolled, 
  toggleMobileMenu, 
  setMobileMenuOpen,
  setActiveDropdown
} = navigationSlice.actions;

export default navigationSlice.reducer;
