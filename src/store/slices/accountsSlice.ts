import dataSource from "../../data/data.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

enum LsKeys {
  accounts = "accounts",
}

interface Account {
  link: string;
  name: string;
  description: string;
}

interface AccountsState {
  accounts: Account[];
}

const loadAccountsFromLocalStorage = (): Account[] => {
  const storedAccounts = localStorage.getItem(LsKeys.accounts);
  if (storedAccounts) {
    return JSON.parse(storedAccounts);
  }
  return [...dataSource];
};

const initialState: AccountsState = {
  accounts: [...loadAccountsFromLocalStorage()],
};

export const accountsSlice = createSlice({
  name: "accountsSlice",
  initialState,
  reducers: {
    getAccounts: (state) => state,
    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
      localStorage.setItem(LsKeys.accounts, JSON.stringify(state.accounts));
    },
  },
});

export const { getAccounts, addAccount } = accountsSlice.actions;
export const selectAccounts = (state: RootState) => state.accounts.accounts;
export default accountsSlice.reducer;
