import React from 'react';
import { Route } from 'react-router-dom';
import NavigationHeader from './components/navigation-header';
import Portfolio from './pages/portfolio';
import './App.css';

const MockComponent = () => {
  return (
    <main>
      <h4>Hey! We're still working on making this site gorgeous. Stay tuned!</h4>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationHeader>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={MockComponent} />
        <Route exact path="/about" component={MockComponent} />
        <Route exact path="/" component={MockComponent} />
      </NavigationHeader>
    </div>
  );
}

export default App;
