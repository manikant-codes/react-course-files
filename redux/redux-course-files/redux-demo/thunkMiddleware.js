import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// actions
const FETCH_USERS_DATA = "FETCH_USERS_DATA";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creators
function fetchUsersData() {
  return { type: FETCH_USERS_DATA };
}
function fetchUsersSuccess(data) {
  return { type: FETCH_USERS_SUCCESS, payload: data };
}
function fetchUsersFailure(error) {
  return { type: FETCH_USERS_FAILURE, payload: error };
}

function fetchData() {
  return function (dispatch) {
    dispatch(fetchUsersData());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
}

// initial state

const intialState = {
  loading: false,
  data: null,
  error: "",
};

// reducer
function reducer(state = intialState, action) {
  switch (action.type) {
    case FETCH_USERS_DATA:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: false };
    case FETCH_USERS_FAILURE:
      return { loading: false, data: null, error: action.payload };

    default:
      return state;
  }
}

// store
const store = createStore(reducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(fetchData());

console.log("Initial State: ", store.getState());

// unsubscribe();
