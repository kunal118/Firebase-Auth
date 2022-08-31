import React, { useRef ,useState} from 'react';
import {Card,Form,Button, Alert} from  'react-bootstrap'
import { useAuth } from './context/AuthContext';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup} = useAuth()
    // console.log(signup);
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    async function handleSubmit(e){
        // console.log("clciked");
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value )
        {
            return setError("passwords dont match");
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
        }
        catch{
            setError("failed to create account")
        }
        setLoading(false)
        
    }
    return (
        <div>
            <Card>
            <Card.Body>

                <h2 className = "text-center mb-4">Sign up</h2>
                {error && <Alert variant = "danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id = "email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" ref = {emailRef} required />
                    </Form.Group>
                    <Form.Group id = "password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" ref = {passwordRef} required />
                    </Form.Group>
                    <Form.Group id = "password-confirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type = "password" ref = {passwordConfirmRef} required />
                    </Form.Group>
                    
                    <Button className = "w-100" type = "submit" disabled = {loading}>Sign up</Button>
                </Form>

            </Card.Body>
            </Card>
              <div className = "w-100 text-cenetr mt-2">
                Already have an account? Login
              </div> 
            
        </div>
    );
};



export default Signup;
