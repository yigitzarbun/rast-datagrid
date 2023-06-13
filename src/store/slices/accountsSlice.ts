import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Account {
  accountLink: string;
  accountName: string;
  accountDescription: string;
}

interface AccountsState {
  accounts: Account[];
}

const initialState: AccountsState = {
  accounts: [],
};

export const accountsSlice = createSlice({
  name: "accountsSlice",
  initialState,
  reducers: {
    //getAccounts: (state) =>  {get accounts};
    //addAccount: (state) => {add new account}
  },
});

export const { getAccounts, addAccount } = accountsSlice.actions;
export const selectAccounts = (state: RootState) => state.accounts.accounts;
export default accountsSlice.reducer;
