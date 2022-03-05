import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="FormGroup col-md-6">
            <fieldset>
                <legend>Authentication</legend>
                <Form>
                    <Form.Group className="mb-3 col-md-12" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-12" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="checkboxForm mb-3 col-md-12" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </fieldset>
        </div>
    );
};

export default Contact;