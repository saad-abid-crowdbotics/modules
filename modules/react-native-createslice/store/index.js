import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setStore } from "../utils";
import { api } from "./api";

export const usersRequest = createAsyncThunk(
  "user/usersRequest",
  async () => {
    const response = await api.apiUsersRequest();
    return response.json();
  }
);

const initialState = {
  users: [],
  api: { loading: "idle", error: null }
};

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    populateUsers(state, action) {
      state.users = action.payload;
    }
  },
  extraReducers: {
    [usersRequest.pending]: (state) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
        state.api.error = null;
      }
    },
    [usersRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        setStore("users", JSON.stringify(action.payload));
        state.users = action.payload;
        state.api.loading = "idle";
      }
    },
    [usersRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});

export const { populateUsers } = slice.actions;
export default slice;
