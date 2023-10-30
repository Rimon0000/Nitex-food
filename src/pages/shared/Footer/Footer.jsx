import { FaFacebook, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube, } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo.jpeg"


const Footer = () => {
    return (
        <div className='bg-base-200 rounded-lg'>
            <div className="footer p-10">
               <div>
                   <Link to="/">
                     <img className='lg:w-15 h-14 rounded-lg' src={logo} alt="" />
                   </Link>
                   <h3 className='font-bold normal-case text-xl'>Grand Sikhder</h3>
               </div>
               <nav className="font-semibold">
                   <header className="footer-title text-xl">Services</header> 
                   <a className="link link-hover">Category</a> 
                   <a className="link link-hover">Food</a> 
                   <a className="link link-hover">About</a> 
                   <a className="link link-hover">Entrepreneur</a>
                </nav>
               <div>
                 <header className="footer-title text-xl">Social</header> 
                 <div className="grid grid-flow-col gap-5">
                    <a href="#"><FaFacebook className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaFacebook></a>
                    <a href="#"><FaYoutube className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaYoutube></a>
                    <a href="#"><FaTwitter className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaTwitter></a>
                 </div>
               </div>
               <div className="text-base">
                    <header className='footer-title text-xl text-center'>Contact Info</header>
                    <div className='flex gap-3'>
                        <div className='rounded-full'><FaMailBulk></FaMailBulk></div>
                        <p><span className='font-semibold'>Email: </span>grandsikhder@gmail.com</p>
                    </div>
                    <div className='flex gap-3'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p><span className='font-semibold'>Phone: </span>+880 1306-260913</p>
                    </div>
                    <div className='flex gap-3'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p><span className='font-semibold'>Address: </span> Jamalkhan, chattagram, Bangladesh</p>
                    </div>   
                </div>
            </div>
            <div className="text-center py-2">
               <div>
                 <p className='font-semibold'>Copyright © 2023 - All right reserved by Grand Sikhder</p>
               </div>
            </div>  
        </div>
    );
};

export default Footer;