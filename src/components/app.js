import React from 'react';
// import ReactDOM from 'react-dom';
import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Conversation from './conversation';
import About from './about';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Conversation} />
          <Route path="/about" component={About} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
