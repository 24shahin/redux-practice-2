import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
      console.log(state.value);
    },
    decrement: (state, action) => {
      state.value -= action.payload;
      console.log(state.value);
    },
    multiple: (state, action) => {
      if (state.value > 0) {
        state.value *= action.payload;
      }
    },
    divided: (state, action) => {
      if (state.value >= 2) {
        state.value /= action.payload;
      }
    },
  },
});

export const { increment, decrement, multiple, divided } = counterSlice.actions;

export default counterSlice.reducer;
