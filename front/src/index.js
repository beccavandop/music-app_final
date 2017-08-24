import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArtistDetails from './ArtistDetails';
import ArtistList from './ArtistList';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


ReactDOM.render(
    <Router history={browserHistory}>
       <Route path="/" component={App}>
            <IndexRoute component={ArtistList} />
            <Route path="/:id" component={ArtistDetails} />
        </Route>
    </Router>
  ,document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
