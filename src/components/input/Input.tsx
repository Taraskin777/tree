import useMode from 'context/mode';

import classes from './input.module.scss';

const Input = (): JSX.Element => {
  const context = useMode();
  const {inputValue, handleInput} = context;

  return (
    <div className={classes.input}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="add category"
      />
    </div>
  );
};

export default Input;
