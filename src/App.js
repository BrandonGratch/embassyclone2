import React from 'react';
import { Home } from './screens/Home';
import { AllProducts } from './screens/AllProducts';
import { Route, Switch} from 'react-router-dom';
import { FixedHeader } from './components/FixedHeader';
import { Footer } from './components/Footer';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Leadership from './screens/Leadership';
import History from './screens/History';
import Careers from './screens/Careers';

function App() {
  return (
    <GlobalProvider>
      <FixedHeader />
      <Switch>
        <Route path='/embassyclone2' component={Home} exact />
        <Route path='/all-products' component={AllProducts} />
        <Route path='/leadership' component={Leadership} />
        <Route path='/history' component={History} />
        <Route path='/careers' component={Careers} />
      </Switch>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
