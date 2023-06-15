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

// loadAccountsFromLocalStorage loads existing accounts from the /src/data/data.json file (4 accounts) by default.
// if the user adds any new accounts, then the loadAccountsFromLocalStorage concats existing accounts and newly added accounts.

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

    // if the user adds any new accounts, the addAccount reducer first saves them to the redux state and
    // then adds them to the local storage

    addAccount: (state, action: PayloadAction<Account>) => {
      state.accounts.push(action.payload);
      localStorage.setItem(LsKeys.accounts, JSON.stringify(state.accounts));
    },
  },
});

export const { getAccounts, addAccount } = accountsSlice.actions;
export const selectAccounts = (state: RootState) => state.accounts.accounts;
export default accountsSlice.reducer;
