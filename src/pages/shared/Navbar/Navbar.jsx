import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.jpeg"


const Navbar = () => {

    const handleMenuItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      };

    const navOptions = (
        <>
          <li>
            <Link className="font-semibold" to='/'>Home</Link>
          </li>
          <li>
          <Link onClick={() => handleMenuItemClick('skills')} className="font-semibold" to='#Skills'>Skills</Link>
          </li>
          <li>
            <Link onClick={() => handleMenuItemClick('projects')} className="font-semibold" to='#Projects'>Projects</Link>
          </li>
          <li>
            <Link onClick={() => handleMenuItemClick('contact')} className="font-semibold" to='#Contact'>Contact</Link>
          </li>
        </>
      );

    return (
        <>
      <div className="navbar bg-opacity-40 bg-black lg:text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
            <Link to="/" className="mr-3 ml-5">
              <img className='lg:w-15 h-14 rounded-lg' src={logo} alt="" />
            </Link>
            <h3 className='font-bold normal-case text-xl'>Grand Sikhder</h3>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-primary btn-sm mr-3">Login</button>
          <div>
          
          </div>
        </div>
      </div>
    </>
    );
};

export default Navbar;