/* eslint-disable import/no-anonymous-default-export */

import reducer from "./todos";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({ reducer });
