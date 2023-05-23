import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(result => {
                navigate("/login")
            }).catch(error => {

            })
    }
    const NavBar = <>
        {/* <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>ToyFriendly</NavLink></li> */}
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>Home</NavLink></li>
        <li>  <NavLink to="/alltoys" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>All Toys</NavLink> </li>
        {
            user && <><li> <NavLink to="/mytoy" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>My A Toy</NavLink> </li>
            <li> <NavLink to="/addtoy" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>Add A Toy</NavLink> </li></>
        }
        <li> <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-black" : "text-white")}>Blogs</NavLink> </li>
    </>
// className={({ isActive }) => (isActive ? "text-purple-500" : "text-white")}
    return (
        <div className='bg-[#8bc34a]'>
            <div className="navbar container mx-auto py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#8bc34a] rounded-box w-52 text-black font-Roboto">
                            {NavBar}
                        </ul>
                    </div>
                    <Link to="/" className=" text-xl"> <img src="https://i.ibb.co/Pjt5h36/logo.png" alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {NavBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && user ? <>
                        <button className='text-white btn-sm md:btn btn-outline' onClick={handleLogOut}>Log out</button>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                            <div className="w-10 rounded-full border-white">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                    </> : <Link to="login" className='text-white'>Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;