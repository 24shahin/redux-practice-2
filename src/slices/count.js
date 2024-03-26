import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
      console.log(state.value);
    },
    decrement: (state) => {
      state.value--;
      console.log(state.value);
    },
    multiple: (state) => {
      if (state.value > 0) {
        state.value *= 2;
      }
    },
    divided: (state) => {
      if (state.value > 1) {
        state.value /= 2;
      }
    },
  },
});

export const { increment, decrement, multiple, divided } = counterSlice.actions;

export default counterSlice.reducer;
