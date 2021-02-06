import { Button, Container, Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import FormController from '../components/form/FormController';
import { REGISTER } from '../redux/type';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const Register = ({ userRegister }) => {
    const router = useHistory();

    const initialValues = {
        username: '',
        email: '',
        gender: '',
        phoneNumber: ''
    };
    const onSubmit = (values) => {
        userRegister(values);
        router.push('/');
    };

    const phoneRegExp = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/; // phone number regular expression for Indonesia

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        gender: Yup.string().required('Gender is required'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Invalid phone number').required('Phone number is required')
    });

    return (
        <Container>
            <h1 className="mt-5">Register</h1>
            <Row>
                <Col md="6">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {({ handleChange, values, errors }) => (
                            <Form>
                                <FormController control='input' name='username' label='Username' placeholder='Username'
                                    value={values.username} onChange={handleChange} error={errors.username} />
                                <FormController control='input' name='email' label='Email' placeholder='Email'
                                    value={values.email} onChange={handleChange} error={errors.email} />
                                <FormController control='select' name='gender' label='Gender' placeholder='Gender'
                                value={values.gender} onChange={handleChange} error={errors.gender}
                                options={[
                                    {key: 'Male', value: 'male'},
                                    {key: 'Female', value: 'female'}
                                ]} />
                                <FormController control='input' name='phoneNumber' label='Phone Number' placeholder='9-12 digit phone number'
                                    value={values.phoneNumber} onChange={handleChange} error={errors.phoneNumber} />
                                <Button type='submit' variant='dark'>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    </Col>
            </Row>
        </Container>
    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        userRegister: (payload) => dispatch({type: REGISTER, payload})
    }
}

export default connect(null, mapDispatchToProps)(Register);
// export default Register;
