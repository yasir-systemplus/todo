/* eslint-disable import/no-anonymous-default-export */

import reducer from "./todos";
import { configureStore } from "@reduxjs/toolkit";
import apiCall from "./middlewares/api";
import localStorageMid from "./middlewares/localStorage";

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiCall].concat(localStorageMid)),
});
