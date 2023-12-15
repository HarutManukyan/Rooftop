import { configureStore } from "@reduxjs/toolkit";

import roomReducer from "./slices/roomSlice";
import usersReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    room: roomReducer,
    users: usersReducer,
  },
});

export default store;
