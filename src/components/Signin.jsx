import React, { useState, useEffect } from 'react'
import {
    Link,   
} from "react-router-dom";


const Signin =()=> {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const [successMsg, setSuccessMsg] = useState('');
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!values.email) {
            errors.email = "Email is required*";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required*";
        }
        return errors;
    };


    return (
        <>
            <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 font-serif">
                {/* <pre>{JSON.stringify(formValues,undefined ,2)}</pre>  */}
                <div className="max-w-lg mx-auto">
                    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Signed in Successfully!</div>):(<pre>{JSON.stringify(formValues,undefined ,2)}</pre> ) } */}
                    <h1 className="text-5xl font-bold text-white text-center">AEC Coding Club</h1>

                </div>

                <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section >
                        <h3 className="font-bold text-2xl text-center"><span className=' fa fa-user-circle fa-3x '></span><br></br>Welcome Back!</h3>
                        <p className="text-gray-600 pt-2 text-center">Sign in to your account.</p>
                    </section>
                    <section className="mt-10">
                        <form className="flex flex-col" method="POST" action="/" onSubmit={handleSubmit} >
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 " htmlFor="useremail">Email</label>
                                <input type="email"
                                    name="email"
                                    // id="useremail"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3 pb-3"
                                    placeholder='Enter your registered email' />
                            </div>
                            <p className='text-red-800 font-thin'>{formErrors.email}</p>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="userpassword">Password</label>
                                <input type="password"
                                    name="password"
                                    // id="userpassword"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3 pb-3"
                                    placeholder='Enter your password' />

                            </div>
                            <p className='text-red-800 font-thin'>{formErrors.password}</p>
                            <div className="flex justify-end">
                                <Link to="/forgot" className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6">Forgot your password?</Link>
                            </div>
                            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 " type="submit">Sign In</button>
                        </form>
                    </section>
                </main>
                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black">Don't have an account? <Link to="/signup" className="font-bold hover:underline"><br></br>
                    <span className='fa fa-user-plus mx-1'></span>Sign up</Link></p>

                </div>

                {/* <footer className="max-w-lg mx-auto flex justify-center text-black">
                    <a href="#" className="hover:underline">Help</a>
                    <span className="mx-3">•</span>
                    <a href="#" className="hover:underline">Privacy</a>
                </footer> */}
            </div>

        </>
    );
}
export default Signin;