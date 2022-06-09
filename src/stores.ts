import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AnswerReducer } from "./reducers/AnswerReducers";

const reducer = combineReducers({
        Answer: AnswerReducer
})

const initialState = {};
const middleWare = [thunk]
const store = createStore(
        reducer, initialState,
        applyMiddleware(...middleWare)
)

export default store;
