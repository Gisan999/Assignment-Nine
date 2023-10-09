import { Link, useNavigate } from "react-router-dom";
import bgpng from '../../assets/result.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const [signUpError, setSignUpError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { registerUser, userUpdate } = useContext(AuthContext)

    const handleRegistration = e => {
        e.preventDefault();
        setSignUpError('');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(photo);
        const check = e.target.terms.checked
        console.log(check);

        if (password.length < 6) {
            setSignUpError('Password must be at least six digits long');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password must be at least one uppercase letter');
            return;
        }
        else if (!/[!@#$%^&*_+?><|/]/.test(password)) {
            setSignUpError('Password must contain at least one special character');
            return;
        }
        else if (!check) {
            setSignUpError('Please accept our terms and conditions');
            return;
        }

        registerUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('Registration Successful')
                navigate('/')
                userUpdate(name, photo)
                .then(result => {
                    console.log(result);
                    window.location.reload(false);
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })

    }

    const display = () => {

        if (signUpError) {
            Swal.fire({
                position: 'center',

                title: `${signUpError}`,
                icon: 'warning',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    display();

    return (
        <div style={{
            backgroundImage: `url(${bgpng})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
        }} className="">


            <div className="">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold ">REGISTRATION</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleRegistration}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name"
                                        name="name"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="Please provide a valid url"
                                        name="photo"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email" className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password" className="input input-bordered pr-32 md:pr-48" required />
                                        <span className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                    </div>
                                    <div className="mt-4 items-center flex">

                                        <input className="checkbox checkbox-accent"

                                            type="checkbox" name="terms" id="terms" />
                                        <label
                                            className="ml-2"
                                            htmlFor="terms">Accept Out <a className="font-medium hover:underline" href="">Terms And Conditions</a></label>
                                    </div>


                                </div>
                                <div className="form-control mt-4">
                                    <button

                                        className="btn  bg-teal-400 ">REGISTER</button>
                                </div>
                            </form>
                            <h2 className="text-md p-5">Already have an account? <Link to="/login"><span className="text-lg font-medium hover:underline text-teal-400">Login Here</span></Link></h2>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;