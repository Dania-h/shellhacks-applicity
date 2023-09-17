import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from "react-router-dom";

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

    return (
        <div className='border p-5 rounded' style={{ width: '500px' }}>
            <h1 className='text-2xl mb-4'>Register</h1>
            {!pendingVerification && (
                <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
                    <div>
                        <label
                            htmlFor='email'
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Email Address
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5'
                            placeholder='name@company.com'
                            required={true}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='password'
                            className='block mb-2 text-sm font-medium text-gray-900'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'
                            required={true}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
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
    );
};

export default Register;