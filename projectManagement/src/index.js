import React from 'react';
import Routers from "./Routes";
import ReactDOM from "react-dom/client";

import { Provider } from 'react-redux';
// import store from './store';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Provider store={store}>
      <Routers />
    </Provider>,

  </>
);


