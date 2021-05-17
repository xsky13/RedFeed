import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Subreddit } from './pages/Subreddit';
import { Sidebar } from './Components/Sidebar';
import { DisplayPost } from './Components/DisplayPost';
import { User } from './pages/User';
import { Search } from './Components/Search';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: red[500],
    },
  },
});



const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div className="main-row">
            <Sidebar />
            <Switch>
              <Route path="/RedFeed/" exact component={Main} />
            </Switch>
            <Switch>
              <Route path="/RedFeed/subreddit/:subreddit" exact component={Subreddit} />
            </Switch>
            <Switch>
              <Route path="/RedFeed/post/:subreddit/:user/:post" exact component={DisplayPost} />
            </Switch>
            <Switch>
              <Route path="/RedFeed/user/:user" exact component={User} />
            </Switch>
            <Switch>
              <Route path="/RedFeed/search" exact component={Search} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
