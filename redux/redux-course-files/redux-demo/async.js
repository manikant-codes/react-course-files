const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").thunk;
const axios = require("axios");

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (success) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: success,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

const initialState = {
  loading: false,
  data: [],
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(
          fetchDataSuccess(
            response.data.map((d) => {
              return { id: d.id, name: d.name };
            })
          )
        );
      })
      .catch((err) => {
        dispatch(fetchDataFailure(err));
      });
  };
};

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(fetchData());

// unsubscribe();
