import { Form } from 'react-bootstrap';

const Select = ({ label, name, options, onChange, error }) => {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control as='select' name={name} placeholder={label} onChange={onChange} isInvalid={!!error} >
                <option>-Select {label}-</option>
                {options.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.key}
                    </option>
                ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default Select;
