import * as React from "react";
import {createStore, applyMiddleware} from "redux";
import {render as rtlRender} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom"

import root from "../store/reducers";
import thunk from "redux-thunk";

export const render = (ui) => {
  const store = createStore(root, applyMiddleware(thunk));
  const renderResult = rtlRender(
    <BrowserRouter>
      <Provider store={store}>{ui}</Provider>
    </BrowserRouter>,
  );
  return {
    ...renderResult,
    store,
  };
};