import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITEM } from '../../utils/types';

const loadItemsFromLocalStorage = ():ITEM[] => {
  const savedItems = localStorage.getItem('items');
  return savedItems ? JSON.parse(savedItems) : [];
};

const saveItemsToLocalStorage = (items : ITEM[]) => {
  localStorage.setItem('items', JSON.stringify(items))
}

const initialItemsState = {
  items: loadItemsFromLocalStorage(),
};

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialItemsState,
  reducers: {
    addItem(state, action : PayloadAction<ITEM>) {
      state.items.push(action.payload);
      saveItemsToLocalStorage(state.items);
    },
    editItem(state, action : PayloadAction<ITEM>) {
      const index = state.items.findIndex((item : ITEM) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
        saveItemsToLocalStorage(state.items);
      }
    },
  },
});

export const { addItem, editItem } = itemsSlice.actions;
export default itemsSlice.reducer;
