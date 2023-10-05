import Input from 'components/input/Input';

import classes from './listofcategory.module.scss';

import {ReactComponent as Plus} from 'assets/icons/plus_icon.svg';

const ListOfCategory = (): JSX.Element => {
  return (
    <div className={classes.inputWrapper}>
      <Input />
      <Plus />
    </div>
  );
};

export default ListOfCategory;
