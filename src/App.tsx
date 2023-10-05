import {ModeProvider} from './context';
import './App.css';
import './reset.scss';
import Category from 'components/category/Category';

function App(): JSX.Element {
  return (
    <ModeProvider>
      <div className="App">
        <Category />
      </div>
    </ModeProvider>
  );
}

export default App;
