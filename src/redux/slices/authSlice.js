import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  isLogedIn: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList(state, action) {
      state.users = action.payload;
    },
    setUserData(state, { payload }) {
      state.user = payload.user
        ? payload.user
        : state.users.find(
            (user) =>
              user.username.toLowerCase() === payload.username.toLowerCase() &&
              user.password.toLowerCase() === payload.password.toLowerCase()
          );
    },
    setIsLogedIn(state, { payload }) {
      state.isLogedIn = payload;
    },
  },
});

export const { setUsersList, setIsLogedIn, setUserData } = usersSlice.actions;

export const usersSelector = (state) => state.users.users;
export const isLogedInSelector = (state) => state.users.isLogedIn;
export const userSelector = (state) => state.users.user;

export default usersSlice.reducer;
