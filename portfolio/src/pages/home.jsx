import React, { useState, useEffect } from 'react';

const Home = () => {
  const backgroundImages = [
    'url("/images/sk.jpg")',
    'url("/images/mk.jpg")',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Background diagonal overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 45% 0, 55% 100%, 0% 100%)',
          backgroundColor: 'white',
        }}
      />

      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 z-10 flex flex-col justify-center p-10 md:p-20 text-black">
        <div className="max-w-xl">
          <h3 className="text-gray-500 uppercase tracking-widest mb-2">Hello! This is Clyde</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Creative <span className="text-gray-500">UI/UX</span> <br />
            Designer & Developer
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition">Hire Me</button>
            <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition">Download CV</button>
          </div>
        </div>
      </div>

      {/* Right Section: Sliding Background Images & Profile Image */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: bg }}
          />
        ))}

        {/* Overlay profile image */}
        <div className="absolute inset-0">
          <img
            src="/images/profile.png"
            alt="Sai kiran profile"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
      </div>

      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 md:left-16 z-20">
        <h1 className="text-xl md:text-2xl font-bold text-black">CLYDE.</h1>
      </div>

      {/* Top Right Navigation */}
      <nav className="absolute top-6 right-6 md:right-16 z-20 hidden md:block">
        <ul className="flex gap-6 text-black-700 font-medium">
          {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'BLOG', 'CONTACT'].map((item, idx) => (
            <li key={idx} className={item === 'HOME' ? 'border-b-2 border-gray-700' : 'hover:text-gray-900'}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Home;
