import dataSource from "../../data/data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Account {
  link: string;
  name: string;
  description: string;
}

interface AccountsState {
  accounts: Account[];
}

const initialState: AccountsState = {
  accounts: dataSource,
};

export const accountsSlice = createSlice({
  name: "accountsSlice",
  initialState,
  reducers: {
    getAccounts: (state) => state,
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
    },
  },
});

export const { getAccounts, addAccount } = accountsSlice.actions;
export const selectAccounts = (state: RootState) => state.accounts.accounts;
export default accountsSlice.reducer;
