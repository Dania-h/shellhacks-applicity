import "../styles/Register.scss";
import logo from "../assets/logo.png";
import Aos from "aos";
import 'aos/dist/aos.css';

import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const { isLoaded, signUp, setActive } = useSignUp();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    function makeAccount(url, data) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Send the entire data object as JSON
        };

        fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((responseData) => {
                console.log('Response data:', responseData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

            // change the UI to our pending section.
            setPendingVerification(true);
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // Verify User Email Code
    const onPressVerify = async (e) => {
        e.preventDefault();
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });
            if (completeSignUp.status !== "complete") {
                /*  investigate the response, to see if there was an error
                 or if the user needs to complete more steps.*/
                console.log(JSON.stringify(completeSignUp, null, 2));
            }
            if (completeSignUp.status === "complete") {
                await setActive({ session: completeSignUp.createdSessionId })

                makeAccount("http://localhost:3001/users", { user_email: emailAddress })

                navigate('/')
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    Aos.init({
        duration: 800
    });

    return (
        <section className="registration-body">
            <div className='registration-background'></div>
            <Link to={"/"}>
                <img className="registration-logo" src={logo} alt="Applicity logo" />
            </Link>
            <div className='register' data-aos="zoom-out">
                <h1 className='register__heading'>Register</h1>
                {!pendingVerification && (
                    <form onSubmit={handleSubmit} className='register__form'>
                        <div className='register__form-email register__form-field'>
                            <label
                                htmlFor='email'
                                className='register__form-email-label register__form-label'
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onChange={(e) => setEmailAddress(e.target.value)}
                                className='register__form-email-input register__form-input'
                                placeholder='name@company.com'
                                required={true}
                            />
                        </div>
                        <div className='register__form-password register__form-field'>
                            <label
                                htmlFor='password'
                                className='register__form-password-label register__form-label'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                className='register__form-password-input register__form-input'
                                required={true}
                            />
                        </div>
                        <button
                            type='submit'
                            className='register__form-button'
                        >
                            Create an account
                        </button>
                    </form>
                )}
                {pendingVerification && (
                    <div>
                        <form className='space-y-4 md:space-y-6'>
                            <input
                                value={code}
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                                placeholder='Enter Verification Code...'
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button
                                type='submit'
                                onClick={onPressVerify}
                                className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                            >
                                Verify Email
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Register;