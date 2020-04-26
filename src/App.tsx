import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './screens/Home';
import NotFound from 'screens/NotFound';
import { theme } from 'app.styled';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrashAlt, faPlus, faTimes)

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
