import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingDates: {},
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setBookingDates(state, { payload }) {
      state.bookingDates = payload;
    },
  },
});

export const { setBookingDates } = roomSlice.actions;

export const bookingDatesSelector = (state) => state.room.bookingDates;

export default roomSlice.reducer;
