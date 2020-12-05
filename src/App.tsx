import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Inbox from './components/Inbox';

function App() {
  return (
    <React.Suspense fallback={<p>loading...</p>}>
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/inbox" component={Inbox} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </React.Suspense>
  );
}

export default App;
