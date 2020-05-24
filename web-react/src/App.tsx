import React from 'react';
import { Route } from 'react-router-dom';
import NavigationHeader from './components/navigation-header';
import Portfolio from './pages/portfolio';
import './App.css';

const MockComponent = () => {
  return <h2>Hello world!</h2>;
}

function App() {
  return (
    <div className="App">
      <NavigationHeader>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="*" component={MockComponent} />
      </NavigationHeader>
    </div>
  );
}

export default App;
