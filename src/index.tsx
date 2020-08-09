import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const TodoList = lazy(() => import('./TodoList'));

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={TodoList}/>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
