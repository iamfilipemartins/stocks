import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Company from './features/company';
import Header from './shared/components/header';
import { Container, ContainerContent } from './styles';
import Footer from './shared/components/footer';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header title="Search your company and discover more financial details about"/>
          <ContainerContent>
            <Switch>
              <Route exact path="/" component={Company} />
              <Route exact path="/company" component={Company} />
            </Switch>
          </ContainerContent>
          <Footer />
        </Container>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
