/* eslint-disable import/no-anonymous-default-export */

import reducer from "./todos";
import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

// export default configureStore({ reducer });
export default configureStore({ reducer });
