import { createSlice } from '@reduxjs/toolkit';
import { ITEM } from '../../utils/types';

const loadItemsFromLocalStorage = () => {
  const savedItems = localStorage.getItem('items');
  return savedItems ? JSON.parse(savedItems) : [];
};

const initialItemsState = {
  items: loadItemsFromLocalStorage(),
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialItemsState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    addItem(state, action) {
      state.items.push(action.payload);
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    editItem(state, action) {
      const index = state.items.findIndex((item : ITEM) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
        localStorage.setItem('items', JSON.stringify(state.items));
      }
    },
  },
});

export const { setItems, addItem, editItem } = itemsSlice.actions;
export default itemsSlice.reducer;
