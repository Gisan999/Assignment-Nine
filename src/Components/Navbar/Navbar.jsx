import { NavLink } from "react-router-dom";

const Navbar = () => {


    const navbar = <>
      <p className="text-xl"><NavLink className={"active:text-red-500 focus:text-blue-600 focus:underline focus:font-bold"} to="/">Home</NavLink></p>
      <p className="text-xl"><NavLink className={"active:text-red-500 focus:text-blue-600 focus:underline focus:font-bold"} to="/">Home</NavLink></p>
      <p className="text-xl"><NavLink className={"active:text-red-500 focus:text-blue-600 focus:underline focus:font-bold"} to="/">Home</NavLink></p>
  
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
                    <a className=" uppercase font-serif text-xl md:text-3xl font-extrabold">Life <sup className="text-2xl md:text-3xl text-green-400">S</sup> tyle</a>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu space-x-5 menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="rounded-full w-12 mr-3" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
                    <a className="btn ">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;