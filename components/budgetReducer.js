// reducers/budgetReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const budgetSlice = createSlice({
  name: 'budgets',
  initialState,
  reducers: {
    addBudget(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
