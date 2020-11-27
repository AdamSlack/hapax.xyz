import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Post from './components/Post';
import DefaultLayout from './layouts/Default';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/posts/:postId">
            <DefaultLayout>
              <Post />
            </DefaultLayout>
          </Route>
          <Route path="/">
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
