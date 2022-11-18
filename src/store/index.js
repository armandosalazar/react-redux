import { legacy_createStore as createStore, combineReducers } from "redux";
import reducer from "./amount/reducer";

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;