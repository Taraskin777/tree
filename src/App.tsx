import {useState} from 'react';
import './App.css';
import './reset.scss';
import Category from 'components/category/Category';

function App() {
  const [test, setTest] = useState<boolean>(false);

  const handleText = (): void => {
    setTest(!test);
  };

  return (
    <div className="App" onClick={handleText}>
      <Category />
    </div>
  );
}

export default App;
