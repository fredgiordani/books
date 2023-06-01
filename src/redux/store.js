import { createStore,combineReducers } from "redux";
import addBooksreducer from "./reducers/addBooksReducer";

const rootReducers = combineReducers({
    library: addBooksreducer
})

const store = createStore(rootReducers);

export default store;