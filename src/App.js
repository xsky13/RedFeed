import Button from '@material-ui/core/Button';
import './App.css';
import { Header } from './Components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>Reddit</h1>
      <Button variant="contained" color="primary">Button</Button>
    </div>
  );
}

export default App;
