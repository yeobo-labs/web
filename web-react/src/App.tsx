import React from 'react';
import { Route } from 'react-router-dom';
import NavigationHeader from './components/navigation-header';
import './App.css';

const MockComponent = () => {
  return <h2>Hello world!</h2>;
}

function App() {
  return (
    <div className="App">
      <NavigationHeader>
        <Route path="*" component={MockComponent} />
      </NavigationHeader>
    </div>
  );
}

export default App;
