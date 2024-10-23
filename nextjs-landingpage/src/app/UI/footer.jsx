import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="/about" className="text-gray-400 hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-400 hover:text-white transition">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
