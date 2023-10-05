import {createContext, useContext, useState} from 'react';

interface ContextValue {
  inputValue: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

const ModeContext = createContext<ContextValue>({
  inputValue: '',
  handleInput: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const ModeProvider = ({children}: Props): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const allContextValue: ContextValue = {
    inputValue: text,
    handleInput,
  };

  return (
    <ModeContext.Provider value={allContextValue}>
      {children}
    </ModeContext.Provider>
  );
};

const useMode = (): ContextValue => useContext(ModeContext);

export default useMode;
