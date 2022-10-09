import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css'
import Header from './components/Header';
import Geneologia from './Pages/Geneologia';
import Home from './Pages/Home/Home';
import Cadastrar from './Pages/Cadastrar/Cadastrar';
import Ranking from './Pages/Ranking/Ranking';
import UserProvider from './Context/user';

function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Geneologia" component={Geneologia} />
          <Route exact path="/Ranking" component={Ranking} />
          <Route exact path="/Cadastrar" component={Cadastrar} />
        </Switch>
      </UserProvider>
    </BrowserRouter >



  );
}

export default App;
