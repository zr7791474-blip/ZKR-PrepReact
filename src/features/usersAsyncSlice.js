import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Genere les actions users/fetchUsers/pending, fulfilled et rejected - PDF page 319
export const fetchUsers = createAsyncThunk("users/fetchUsers", (url) => {
  const endpoint = url || "https://jsonplaceholder.typicode.com/users";
  return axios.get(endpoint).then((response) => response.data);
});

export const userAsyncSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      // Correction : le PDF affecte l'objet action.error, qui ne peut pas etre rendu.
      state.error = action.error.message || "Une erreur est survenue.";
    });
  },
});

export default userAsyncSlice.reducer;
