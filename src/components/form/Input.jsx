import { Form } from 'react-bootstrap';

const Input = ({ label, name, placeholder, value, onChange, error }) => {
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type="text"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

export default Input;