import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <li><a>ToyFriendly</a></li>
        <li><a>Home</a></li>
        <li>  <Link to="/alltoys">All Toys</Link> </li>
        {
            user && <><li><a>My Toys</a></li>
            <li> <Link to="/addtoy">Add A Toy</Link> </li></>
        }
        <li><a>Blogs</a></li>
    </>

    return (
        <div className='bg-[#8bc34a]'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white font-Roboto">
                            {NavBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ToyFriendly</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {NavBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && user ? <>
                        <button className='text-white btn btn-outline' onClick={handleLogOut}>Log out</button>
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