// import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
// import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
// import { useState } from "react";

// function App() {
//   // reduxのアクセスするための hooks
//   // state.counter.value は、store.js を見ている
//   const count = useSelector((state) => state.counter.value);
//   // reduxのhooks 通知を出せる
//   const dispatch = useDispatch();

//   const [incrementAmount, setIncrementAmount] = useState("2");
//   return (
//     <div className="App">
//       <h1>count: {count}</h1>
//       <input
//         onChange={(e) => setIncrementAmount(e.target.value)}
//         value={incrementAmount}
//       ></input>
//       {/* storeに特定のreducerを使うよう通知を出している */}
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button
//         onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
//       >
//         追加
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { RootState } from './redux/store'; // - Import the type for the root state

function App() {
  //  reduxのアクセスするための hooks
  //  state.counter.value は、store.js を見ている
  // - Use useSelector with a type for the state
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // - useState<string>("2")と書くと、TypeScriptのジェネリクスを使って、状態変数incrementAmountが常に文字列であることをReactに伝えていることになる。これはReactのuseStateフックでのジェネリクスの正しい使い方である。これにより、ステート変数の型安全性が確保される。
  const [incrementAmount, setIncrementAmount] = useState<string>("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        type="text"
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={ Number(incrementAmount)}></input>
      {/* storeに特定のreducerを使うよう通知を出している */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;
