import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "./usersData";

// userSlice - PDF page 315
export const userSlice = createSlice({
  name: "users",
  initialState: { value: usersData },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateNom: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, nom: action.payload.nom };
        }
        return user;
      });
    },
  },
});

export const { addUser, deleteUser, updateNom } = userSlice.actions;
export default userSlice.reducer;
