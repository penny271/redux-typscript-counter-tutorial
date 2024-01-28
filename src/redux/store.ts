// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Define the RootState type
// - typeScript用
export type RootState = ReturnType<typeof store.getState>;



