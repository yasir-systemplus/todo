/* eslint-disable jsx-a11y/anchor-is-valid */
import Counter from "./counter/counter";
import DatePractise from "./date";
import Set from "./sets/Set";
import SPLTodos from "./todo-app/SPLTodos";
import Table from "./pagination/table";
import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./todo-app/store/store";
/**
 ** App js is used to configure different projects.
 * TODO: Todos project
 * TODO: Counter project(Life Cycle Hooks)
 * TODO: Working on Data (Pagination, sorting, filtering)
 */

function App() {
  return (
    <>
      <div className="flex flex-row justify-center space-x-10">
        <NavLink exact to="/">
          Todos
        </NavLink>
        <NavLink to="/table">Table</NavLink>
        <NavLink to="/hooks">Hooks</NavLink>
      </div>

      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/hooks" component={Counter} />
        <Route
          path="/"
          exact
          render={(props) => (
            <Provider store={store}>
              <SPLTodos {...props} />
            </Provider>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
