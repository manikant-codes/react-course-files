// const { createStore } = require("redux");
import { createStore } from "redux";

// store
// action
// reducer

// actions

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

// initial state

const initialState = {
  numberOfCakes: 10,
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

console.log("Initial State: ", store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
