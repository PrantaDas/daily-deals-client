import axios from 'axios';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'
import { MdErrorOutline} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [emails, setEmails] = useState({ value: '', error: '' });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    

    let from = location.state?.from?.pathname || '/';

    const handleEmail = (event) => {
        const email = event.target.value;
        // console.log(email);
        setEmails({ value: email, error: '' });
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        await signInWithEmailAndPassword(email,password);

        const {data}=await axios.post('https://sleepy-wildwood-12378.herokuapp.com/login',{email});
        console.log(data);;
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from, { replace: true });
        

    }

    
    if(loading){
        return (<div>
            <p>loading.....</p>
        </div>)
    }

    const navigateToRegister = () => {
        navigate('/signup');
    }

    const handleSiginInWithGoogle = () => {
        signInWithGoogle();
        navigate(from, { replace: true });
    }

    const handleResetPassword = () => {


        if (emails.value === "") {
            setEmails({ value: '', error: 'Please Provide Your Email first' });
        }
        else {
            sendPasswordResetEmail(auth, emails.value)
                .then(() => {
                    toast.success("Reset Password Request Sent !", {
                        theme: 'colored'
                    })
                })
                .catch(error => {
                    console.log(error, 'error');
                    const errorMessage = error.message;
                    if (errorMessage.includes('auth/user-not-found')) {
                        toast.error('User Not Found', {
                            theme: 'colored'
                        })
                    }

                })
        }


    }


    return (
        <div>
            <div className='w-50 mx-auto shadow-lg mt-5 rounded-lg'>
                <p className='register-title fw-bolder fs-2 py-2 text-primary'>Please Login</p>
                <Form onSubmit={handleLogin} className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} name='email' type="email" placeholder="Enter email" autoComplete='off' required />
                    </Form.Group>
                    {
                        emails.error && (<p className='text-danger'>{emails.error}</p>)
                    }

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {
                    error && (<p className='text-danger'><span className='px-1'><MdErrorOutline/></span>Inavalid email or password</p>)
                }
                <p><small>Forget Password? <span onClick={handleResetPassword} className='text-primary fw-bolder' role='button'>Reset Password</span></small></p>
                <div className='d-flex justify-content-between align-items-center px-3'>
                    <div className='line '>

                    </div>
                    <p className='mt-2 px-3'><small>or</small></p>
                    <div className='line'>

                    </div>
                </div>
                <p className='pb-5'><small className=''>New to Daily Deals ? <span onClick={navigateToRegister} role="button" className='text-primary fw-bolder'>Register Here</span></small></p>
                <div className='pb-3'>
                    <Button onClick={handleSiginInWithGoogle} variant='info'><span className='px-2'><FcGoogle/></span> Signin With Google</Button>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;