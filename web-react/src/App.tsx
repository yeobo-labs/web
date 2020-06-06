import React from 'react';
import { Route } from 'react-router-dom';
// import Footer from './components/footer';
import NavigationHeader from './components/navigation-header';
import Portfolio from './pages/portfolio';
import PortfolioProductivity from './pages/portfolio/productivity';
import PortfolioGames from './pages/portfolio/games';
import About from './pages/about';
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
        <Route exact path="/portfolio/productivity" component={PortfolioProductivity} />
        <Route exact path="/portfolio/fun-games" component={PortfolioGames} />
        <Route exact path="/blog" component={MockComponent} />
        <Route exact path="/about" component={About} />
        <Route exact path="/productivity" component={PortfolioProductivity} />
        <Route exact path="/fun-games" component={PortfolioGames} />
        <Route exact path="/" component={About} />
      </NavigationHeader>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
