import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    // console.log(user.email);

    const navbar = <>

        <p className="text-lg "><NavLink
            to="/"
            style={({ isActive, isPending }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                };
            }}
        >
            Home
        </NavLink></p>
        <p className="text-lg "><NavLink
            to="/login"
            style={({ isActive, isPending }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                };
            }}
        >
            Login
        </NavLink></p>

    </>

    return (
        <div className=" bg-[#addbd7ee]">
            <div className="max-w-screen-xl mx-auto navbar py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className=" uppercase font-serif text-xl md:text-3xl font-extrabold">Life <sup className="text-2xl md:text-3xl text-sky-500">S</sup> tyle</a>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu space-x-5 menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                <span className="font-medium italic">{user?.displayName
                    }</span>

                    {
                        user ? 

                        <img className="rounded-full h-12 bg-none border-none w-12 mr-3" src={user?.photoURL} alt="" />
                        :
                        <img className="rounded-full h-12 bg-none border-none w-12 mr-3" src="https://www.freeiconspng.com/thumbs/error/a-red-error-exclamation-sign-meaningful-official-round-26.png"/>
                    }


                    {
                        user ?

                            <button onClick={handleLogOut} className="btn btn-outline btn-secondary">Log Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-outline btn-primary">Login</button></Link>
                    }

                  
                </div>
            </div>
        </div>
    );
};

export default Navbar;