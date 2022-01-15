import React, { useState , useEffect } from 'react'
import { Link } from "react-router-dom";
const Signup=()=> {
   
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        console.log(formValues);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
       
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        };

    }, [formErrors]);

    const validate=(values)=>{
        const errors = {}
        const regexmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const regexpswrd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/;
        if(!values.username){
            errors.username="Username is required*";
        }
        if(!values.email){
            errors.email="Email is required*";
        }else if(!regexmail.test(values.email)){
            errors.email="This is not a valid email format!";
        }
        if(!values.password){
            errors.password="Password is required*";
        }else if(values.password.length < 8 || values.password.length > 8){
            errors.password="Length of your password should be 8!"
        }else if(!regexpswrd.test(values.password)){
            errors.password="Your password must contain atleast one uppercase,lowercase,number,and special character!";
        }
        return errors;
    };

    return (
        <>
            <div className="body-bg min-h-screen pt-3 md:pt-10 pb-6 px-2 md:px-0 font-serif">
                <div className="max-w-lg mx-auto">
                {/* <pre>{JSON.stringify(formValues, undefined,2)}</pre> */}
                    <h1 className="text-5xl font-bold text-white text-center">AEC Coding Club</h1>
                </div>

                <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section >
                        <h3 className="font-bold text-2xl text-center"><span className=' fa fa-user-plus fa-3x '></span><br></br>Create your account!</h3>
                        <p className="text-gray-600 pt-2 text-center"></p>
                    </section>
                    <section className="mt-10">
                        <form className="flex flex-col" method="POST" action="/" onSubmit={handleSubmit}>
                        <p  className='text-red-800 font-thin'>{formErrors.username}</p>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 " htmlFor="username">Username</label>
                                <input type="text"
                                    name="username"
                                    // id="username"
                                    value={formValues.username}
                                    onChange={handleChange}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3 pb-3"
                                    placeholder='Enter username' />
                            </div>
                            <p  className='text-red-800 font-thin'>{formErrors.email}</p>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 " htmlFor="useremail">Email</label>
                                <input type="email"
                                    name="email"
                                    // id="useremail"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3 pb-3"
                                    placeholder='Enter your email' />
                            </div>
                            <p  className='text-red-800 font-thin'>{formErrors.password}</p>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="userpassword">Password</label>
                                <input type="password"
                                    name="password"
                                    // id="userpassword"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500 px-3 pb-3"
                                    placeholder='Create password' />
                            </div>
                            
                            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 " type="submit">Sign Up</button>
                        </form>
                    </section>
                </main>
                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black">Already have an account? <Link to="/signin" className="font-bold hover:underline"><br></br>
                    <span className='fa fa-user-circle mx-1'></span>Sign In</Link>.</p>
                </div>

                {/* <footer className="max-w-lg mx-auto flex justify-center text-black">
                    <Link to="/" className="hover:underline">Help</Link>
                    <span className="mx-3">•</span>
                    <Link to="/" className="hover:underline">Privacy</Link>
                </footer> */}
            </div>
        </>
    );
}
export default Signup;