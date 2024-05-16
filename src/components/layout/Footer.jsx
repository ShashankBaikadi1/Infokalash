// import React from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../../assets/images/vector1.png'; // Import your company logo

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <div className="flex items-center mb-4">
//               <img src={logo} alt="Company Logo" className="h-10 mr-2" />
//               <span className="text-xl font-bold">InfoKalash</span>
//             </div>
//             <p>
//               DeshPande Startups Sandbox,<br />
//               Gokul Rd, near to Airport,<br />
//               Hubballi, Karnataka 580030
//             </p>
//           </div>
//           <div className="w-full md:w-1/3 mb-4 md:mb-0">
//             <h3 className="text-lg font-bold mb-2">Subscribe to our newsletter</h3>
//             <p>Contact Us: communications@infokalash.com</p>
//           </div>
//           <div className="w-full md:w-1/3">
//             <h3 className="text-lg font-bold mb-2">Quick Links</h3>
//             <ul className="list-none">
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Home</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Services</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Case Study</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Partners</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Blog</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">About Us</a>
//               </li>
//               <li className="mb-2">
//                 <a href="#" className="hover:text-gray-400">Contact Us</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex justify-between items-center mt-8">
//           <div>
//             <ul className="list-none flex">
//               <li className="mr-4">
//                 <a href="#" className="hover:text-gray-400">
//                   <FaFacebookF />
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="hover:text-gray-400">
//                   <FaInstagram />
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="hover:text-gray-400">
//                   <FaYoutube />
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <ul className="list-none flex">
//               <li className="mr-4">
//                 <a href="#" className="hover:text-gray-400">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-400">Terms &amp; Conditions</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white px-8 py-12">
//       <div className="flex justify-between">
//         <div className="space-y-4">
//           <img src="/path/to/logo.png" alt="Company Logo" className="w-24"/>
//           <h2 className="text-2xl font-bold">InfoKalash</h2>
//           <p>DeshPande Startups sandbox, Gokul Rd, near to Airport, Hubballi, Karnataka 580030</p>
//           <p>Subscribe to our newsletter</p>
//           <p>Contact Us: communications@infokalash.com</p>
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold">Links</h3>
//           <ul className="space-y-1">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/services" className="hover:underline">Services</a></li>
//             <li><a href="/case-study" className="hover:underline">Case Study</a></li>
//             <li><a href="/partners" className="hover:underline">Partners</a></li>
//             <li><a href="/blog" className="hover:underline">Blog</a></li>
//             <li><a href="/about" className="hover:underline">About Us</a></li>
//             <li><a href="/contact" className="hover:underline">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold">Follow us</h3>
//           <ul className="space-y-1">
//             <li><a href="https://www.facebook.com/infokalash" className="hover:underline">Facebook</a></li>
//             <li><a href="https://www.instagram.com/infokalash" className="hover:underline">Instagram</a></li>
//             <li><a href="https://www.youtube.com/infokalash" className="hover:underline">YouTube</a></li>
//             <li><a href="https://www.linkedin.com/company/infokalash" className="hover:underline">LinkedIn</a></li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-8 flex space-x-4">
//         <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
//         <a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



//nice
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../../assets/images/vector1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* <img src={logo} alt="Company Logo" className="h-10 mr-2" />
               */}
               <div className='bg-white p-2 '>
               <svg width="30" height="30" viewBox="0 0 514 457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M324 0H511L349.75 227.5L188.5 455H0L324 0Z" fill="black"/>
            <path d="M323.012 454.995L513.049 454.994L427.31 336.755L348.019 227.498L256.003 359.5L323.012 454.995Z" fill="black"/>
            <circle cx="96.5" cy="72" r="72" fill="#38B6FF"/>
          </svg>
          </div>
              <span className="text-xl font-bold ml-4">InfoKalash</span>
            </div>
            <p className="text-gray-400 ">
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

// import React from 'react';
// import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <div className="flex items-center mb-2">
//               <span className="text-2xl font-bold text-purple-600 mr-2">
//                 <i className="fas fa-bolt"></i>
//               </span>
//               <span className="text-2xl font-bold text-gray-800">infoKalash</span>
//             </div>
//             <p className="text-gray-600">
//               DeshPande Startups sandbox, Gokul Rd, near to Airport, Hubballi, Karnataka 580030
//             </p>
//           </div>
//           <div className="mb-4 md:mb-0">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Subscribe to our newsletter</h3>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
//               />
//               <button className="bg-purple-600 text-white py-2 px-4 rounded-r-md hover:bg-purple-700">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Us</h3>
//             <p className="text-gray-600">communications@infokalash.com</p>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row justify-between items-center mt-8">
//           <div>
//             <ul className="flex mb-4 md:mb-0">
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Home
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Services
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Case Study
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Partners
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Blog
//                 </a>
//               </li>
//               <li className="mr-4">
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-purple-600">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center">
//             <a href="#" className="text-gray-600 hover:text-purple-600 mr-4">
//               <FaFacebook size={20} />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-purple-600 mr-4">
//               <FaInstagram size={20} />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-purple-600 mr-4">
//               <FaYoutube size={20} />
//             </a>
//             <a href="#" className="text-gray-600 hover:text-purple-600">
//               <FaLinkedin size={20} />
//             </a>
//           </div>
//         </div>
//         <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-600 mb-4 md:mb-0">© infoKalash, 2022. All rights reserved.</p>
//           <div>
//             <a href="#" className="text-gray-600 hover:text-purple-600 mr-4">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-gray-600 hover:text-purple-600">
//               Terms &amp; Conditions
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;