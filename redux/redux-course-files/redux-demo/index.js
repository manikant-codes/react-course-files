const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action Creator Function
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

// Initial States
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIcecreams: 20,
// };

const initialCakeState = {
  numberOfCakes: 10,
};

const initialIcecreamState = {
  numberOfIcecreams: 20,
};

// Reducer function original state ko nahi mutate karta hai wo naya state return karta  hai.
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIcecreams: state.numberOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// const store = createStore(reducer);

// const store = createStore(rootReducer);

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

console.log("Initial State: ", store.getState());

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());

unsubscribe();
