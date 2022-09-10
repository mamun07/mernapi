import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const Store = configureStore(reducers, compose(applyMiddleware(thunk)));

const Layout = ({ children }) => {
  return (
    <Provider store={Store}>
      <h4>Header</h4>
      {children}
      <h4>Footer</h4>
    </Provider>
  );
};

export default Layout;
