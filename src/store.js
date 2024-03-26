import { configureStore } from "@reduxjs/toolkit";
import count from "./slices/count";

export default configureStore({
  reducer: {
    mycounter: count,
  },
});
