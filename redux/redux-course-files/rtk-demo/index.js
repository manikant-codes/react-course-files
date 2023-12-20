import { buy } from "./redux/slices/cake";
import { buy as buyIcecream } from "./redux/slices/icecream";

import store from "./redux/store";

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

console.log("Initial State: ", store.getState());

store.dispatch(buy());
store.dispatch(buy());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
