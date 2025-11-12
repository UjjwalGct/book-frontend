
import React from "react";
import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <Footer container className="bg-gray-900 text-gray-300 rounded-none mt-16">
      <div className="w-full px-6 py-12 md:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {/* Column 1 - Company */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Company</h2>
            <Footer.LinkGroup col>
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-200"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="hover:text-blue-400 transition duration-200"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="hover:text-blue-400 transition duration-200"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-200"
              >
                Contact
              </Link>
            </Footer.LinkGroup>
          </div>

          {/* Column 2 - Help Center */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Help Center
            </h2>
            <Footer.LinkGroup col>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Support
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                FAQs
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Shipping
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Returns
              </Link>
            </Footer.LinkGroup>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Legal</h2>
            <Footer.LinkGroup col>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Licensing
              </Link>
            </Footer.LinkGroup>
          </div>

          {/* Column 4 - Download */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">Download</h2>
            <Footer.LinkGroup col>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Android App
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                iOS App
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                Windows
              </Link>
              <Link
                to="#"
                className="hover:text-blue-400 transition duration-200"
              >
                macOS
              </Link>
            </Footer.LinkGroup>
          </div>

          {/* Column 5 - Newsletter */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Subscribe
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Get updates about new books and offers.
            </p>
            
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mt-10 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Footer.Copyright
            href="#"
            by="BookStore™ | Created by Ujjwal Pandey"
            year={new Date().getFullYear()}
          />

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-400">
            <a
              href="#"
              className="hover:text-blue-500 transition duration-200"
              aria-label="Facebook"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition duration-200"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition duration-200"
              aria-label="Twitter"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition duration-200"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition duration-200"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
