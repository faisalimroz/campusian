import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../contexts/AuthProvider';
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    console.log(user)
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (


        <div className=''>
            <nav className="bg-yellow-300  ">
                <div className="mx-auto px-4 sm:px-6 md:px-4 lg:px-8  ">
                    <div className="flex items-center justify-between h-16  ">
                        <div className="flex-shrink-0  md:flex-shrink-1 ">

                            <Link to="/" className="text-white font-bold"><img className='logo' src='https://i.ibb.co/NtzK0yw/roundlogo.png' alt='logo' /></Link>

                        </div>
                        <div className="hidden md:block md:items-center md:flex-shrink-1 ">

                            <ul className="menu menu-horizontal  h-16 faisal ">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to='/career'>Career</Link></li>
                                <li><Link to='/research'>Research Paper</Link></li>
                                {/* <li tabIndex={0} className="dropdown-content">
                                        <a>
                                            Research
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </a>
                                        <ul className="p-2 bg-base-100 ">
                                            <li><Link>Research Paper</Link></li>
                                            <li><Link>Review paper</Link></li>

                                        </ul>
                                    </li> */}
                                <li tabIndex={1}>
                                    <a>
                                        Blogs
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2 bg-base-100">
                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/news'>News</Link></li>


                                    </ul>
                                </li>
                                <li><Link to='/event'>Events</Link></li>

                                <li><Link to='/scholarship'>Scholarship</Link></li>


                                <li><Link to='/aboutus'>About us</Link></li>
                                {
                                    user?.uid ? (
                                        <div className="dropdown dropdown-end  mt-2">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar" style={{ width: '100%', height: '34px', borderRadius: '40%'}}>
                                                <div className="w-10">
                                                    <img src={user.photoURL} alt='ddd' style={{ width: '100%', height: '100%', objectFit: 'cover',borderRadius: '50%' }} />
                                                </div>
                                            </label>

                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><Link to='/profile'>Profile</Link></li>


                                                <li onClick={handleLogout}><a>Logout</a></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <li><Link to='/login'>Login</Link></li>
                                    )
                                }

                            </ul>



                        </div>
                        <div className="-mr-2 flex md:hidden ">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>

                    <ul className="menu sriti  dropdown-content px-1 z-5 faisal ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/career'>Career</Link></li>
                        <li><Link to='/research'>Research Paper</Link></li>
                        {/* <div className="">
                            <li tabIndex={0} className="  dropdown dropdown-right">
                                <Link>
                                    Research
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><Link>Research Paper</Link></li>
                                    <li><Link>Review Paper</Link></li>
                                </ul>
                            </li>
                        </div> */}
                        <div className="">
                            <li tabIndex={1} className="  dropdown dropdown-right fih ">
                                <Link>
                                    Blogs
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/news'>News</Link></li>

                                </ul>
                            </li>
                        </div>
                        <li><Link to='/event'>Events</Link></li>

                        <li><Link to='/scholarship'>Scholarship</Link></li>



                        <li><Link to='/aboutus'>About us</Link></li>
                        {
                            user?.uid ?
                                <div className="dropdown dropdown-right   ml-3 w-16">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className='rounded-full' src={user.photoURL} alt='ddd' />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link to='/profile/mycart'>Profile</Link></li>
                                        <li onClick={handleLogout}><a>Logout</a></li>
                                    </ul>
                                </div> : <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>

                </div>
            </nav>

        </div>
    );
}

export default Navbar;