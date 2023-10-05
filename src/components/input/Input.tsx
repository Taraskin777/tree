import {useState} from 'react';

import classes from './input.module.scss';

const Input = (): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <div className={classes.input}>
      <input type="text" value={text} onChange={handleInput} placeholder='add category'/>
    </div>
  );
};

export default Input;
