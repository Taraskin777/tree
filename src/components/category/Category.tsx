import Input from 'components/input/Input';
import Button from 'components/button/Button';

import classes from './category.module.scss';

const Category = (): JSX.Element => {
  return (
    <div className={classes.inputWrapper}>
      <Input />
      <Button />
    </div>
  );
};

export default Category;