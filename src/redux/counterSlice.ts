import { createSlice } from "@reduxjs/toolkit";

// reducerを作成すると、自動でActionCreatorも作られる
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  // 関数のようなもの
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // input要素で増減する値が固定されていない場合、action.payloadを使う
    incrementByAmount: (state, action) => {
      console.log("action :>> ", action);
      // {type: 'counter/incrementByAmount', payload: 2}
      state.value += action.payload; //2, 10, 100
    },
  },
});

// - 下記2つのexportはセット
// 個々のreducerを使えるようにする
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// このreducerをエクスポートすることで、ストア(store.js)の root reducerに含めることができます。
export default counterSlice.reducer;
