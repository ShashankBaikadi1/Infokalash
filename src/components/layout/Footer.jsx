


//nice
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../../assets/images/vector1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 font-geist">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <img src={logo} alt="Company Logo" className="h-10 mr-2" />
               */}
               <div className='bg-white p-2 ml-5 '>
               <svg width="30" height="30" viewBox="0 0 514 457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M324 0H511L349.75 227.5L188.5 455H0L324 0Z" fill="black"/>
            <path d="M323.012 454.995L513.049 454.994L427.31 336.755L348.019 227.498L256.003 359.5L323.012 454.995Z" fill="black"/>
            <circle cx="96.5" cy="72" r="72" fill="#38B6FF"/>
          </svg>
          </div>
              <span className="text-xl font-bold ml-4">InfoKalash</span>
            </div>
            <p className="text-gray-400 ml-5 ">
              DeshPande Startups Sandbox
              Gokul Rd,<br />near to Airport,
              Hubballi,<br /> Karnataka 580030
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay up-to-date with our latest news and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className='ml-14'>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Case Study</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Partners</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              Have a question or need support? Get in touch with us.
            </p>
            <p className="text-gray-400">
              {/* <span className="font-bold">Email:</span> communications@infokalash.com
               */}
               <a href="mailto:communications@infokalash.com" className="font-bold text-indigo-400  ">  <u>communications@infokalash.com</u></a>

            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-8">
          <div>
            <ul className="flex">
              <li className="mr-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-gray-400">
              <li className="mr-4">
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
