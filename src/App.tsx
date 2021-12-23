import React from 'react';
import './App.css';
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import getStore from "./store"
import AppContainer from './transversal/AppContainer';
import UserFinderView from "./views/UserFinderView"
import UserDetailView from './views/UserDetailView';

const store = getStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route path="/" element={<UserFinderView />} />
            <Route path="/user/:userLogin" element={<UserDetailView />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
