import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
