// store.js

import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetReducer';

export default configureStore({
  reducer: {
    budgets: budgetReducer,
  },
});
