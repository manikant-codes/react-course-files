const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("/slices/cake");
const icecreamReducer = require("/slices/icecream");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

export default store;
