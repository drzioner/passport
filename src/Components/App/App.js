import React from 'react';
import useState from 'global-hook-store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from '../Styles';
import MenuApp from '../MenuApp';
import GlobalState from '../GlobalState';

import Home from '../../Pages/Home';

function App() {
  const { state } = useState(GlobalState);

  const background = () => {
    return state.theme === true ? '#3C4451' : '#FAFAFA';
  };

  const color = () => {
    return state.theme === true ? '#B3E7CA' : '#3C4451';
  };

  return (
    <Router>
      <GlobalStyles background={background} color={color} />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route exact path="/:section" children={<Home />} />
      </Switch>
      <MenuApp background={background} color={color} />
    </Router>
  );
}

export default App;
