/* eslint-disable react/no-unknown-property */

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from 'react-icons/fa'
import auth from "../../Firebase/firebase.config";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState('');
    const [success, setSuccess] = useState('');
    const { logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();



    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
       signInWithPopup(auth, provider)
       .then(result => console.log(result.user))
       .catch(error => console.log(error.message))
    }

    const handleLogIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setShowError('');
        setSuccess('');
        logIn(email, password)
            .then(result => {
                console.log(result);
                setSuccess('success')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setShowError(error.message)
            })
    }


    const display = () => {

        if (showError) {
            Swal.fire({
                position: 'top-right',

                title: `${showError}`,
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
        }
        if (success) {
            Swal.fire({
                position: 'top-right',
                title: `${success}`,
                icon: 'success',
                showConfirmButton: false,
                timer: 500
            })
        }
    }

    display();




    return (
        <div className=" mx-auto">

            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen ">
                    <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form onSubmit={handleLogIn}
                            className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="email" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="true" required />
                            </div>

                            <div className="mt-4 relative">
                                <label className="block text-gray-700">Password</label>
                                <input type={showPassword ? "text" : "password"}

                                    name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                  focus:bg-white 
                                    focus:outline-none" required />
                                <span className="absolute bottom-5 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button onClick={handleGoogle} className="btn btn-info btn-outline w-full">
                            <FaGoogle></FaGoogle>
                            Login with Google</button>

                        <p className="mt-8">Need an account?

                            <Link to="/register">                            <span className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                                account</span></Link>


                        </p>


                    </div>
                </div>

            </section>
        </div>
    );
};

export default Login;