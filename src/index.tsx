import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

import createStore from "./createStore";

const store = createStore();

const render = (app: typeof App) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    console.log("reload index");
    setTimeout(() => render(require("./components/App").default));
  });
}
