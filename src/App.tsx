import {ModeProvider} from './context';
import './App.css';
import './reset.scss';
import ListOfCategory from 'components/listOfCategory/ListOfCategory';

function App(): JSX.Element {
  return (
    <ModeProvider>
      <div className="App">
        <ListOfCategory />
      </div>
    </ModeProvider>
  );
}

export default App;
