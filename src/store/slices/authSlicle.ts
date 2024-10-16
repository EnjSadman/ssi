import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Initial {
  isAuthenticated: boolean,
  username: string | null,
}

const initialAuthState : Initial = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
  username: localStorage.getItem('username') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action : PayloadAction<string>) {
      state.username = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('username')
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
