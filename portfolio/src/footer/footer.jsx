import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sai kiran. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/saiKiran-ambati" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/sai-kiran-ambati-262aba325" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="saikiranreddyambati@gmail.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
