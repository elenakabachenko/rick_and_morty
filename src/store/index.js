import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import root from "./reducers";

const index = createStore(root, applyMiddleware(thunk));
export default index;

