import Input from './Input';
import Select from './Select';

const FormController = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return null;
  }
};

export default FormController;
