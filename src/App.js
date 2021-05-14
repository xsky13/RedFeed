import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Subreddit } from './pages/Subreddit/Subreddit';
import { Sidebar } from './Components/Sidebar';
import { DisplayPost } from './Components/DisplayPost';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-row">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
          <Switch>
            <Route path="/subreddit/:subreddit" exact component={Subreddit} />
          </Switch>
          <Switch>
            <Route path="/post/:subreddit/:user/:post" exact component={DisplayPost} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
