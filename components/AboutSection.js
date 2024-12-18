'use client';

import Link from 'next/link';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black max-w-screen text-white py-8 pt-28 px-8 md:px-14 flex flex-col lg:h-screen overflow-hidden" // Added overflow-hidden to handle overflow
    >
      <div className="lg:flex justify-between gap-8 flex-grow overflow-auto"> {/* Added overflow-auto to make sure content scrolls instead of getting clipped */}
        
        {/* Left Column - Text Content */}
        <div className="lg:w-2/3 space-y-6 max-h-full overflow-y-auto"> {/* Added max-h-full and overflow-y-auto to handle vertical overflow in large sections */}
          <h2 className="border-l-4 border-green-400 pl-2 font-mono font-bold text-xl">
            1. About Section
          </h2>
          <div className="mt-6">
            <p className="font-mono leading-relaxed">
              I am a passionate Full-Stack Developer specializing in building real-time web and mobile applications. With deep expertise in technologies like the MERN stack and React Native, I am driven by the desire to solve complex problems and create innovative solutions.
            </p>
            <p className="font-mono mt-6 leading-relaxed">
              As an aspiring entrepreneur, I am particularly interested in collaborating with startups to bring ideas to life.
            </p>
          </div>
          <Link
            href="#contact"
            className="block mt-8 md:block text-lg underline hover:text-green-400 font-mono"
          >
            Do you want to contact me?
          </Link>
        </div>

        {/* Right Column - Personal Info */}
        <div className="lg:w-1/3 space-y-6 pt-12 lg:pt-0 overflow-hidden"> {/* Ensuring no overflow here */}
          <p className="border-l-4 border-green-400 pl-2 font-mono font-bold text-xl">
            Know More About Me
          </p>
          <div className="lg:block sm:grid grid-cols-2 gap-2 lg:space-y-4 space-y-2 pt-2">
            <p><span className="text-green-400 font-mono">&gt; Full Name:</span> Akkana Sanjeev</p>
            <p><span className="text-green-400 font-mono">&gt; Role:</span> Full-Stack Developer</p>
            <p><span className="text-green-400 font-mono">&gt; Industry:</span> Software Development</p>
            <p><span className="text-green-400 font-mono">&gt; City:</span> Ongole, India</p>
            <p><span className="text-green-400 font-mono">&gt; Degree:</span> B-Tech, CSE</p>
            <p><span className="text-green-400 font-mono">&gt; Experience:</span> 2+ Years</p>
            <p><span className="text-green-400 font-mono">&gt; Languages:</span> Telugu, English</p>
            <p>
              <span className="text-green-400 font-mono">&gt; Email:</span>
              <a href="mailto:akkanasanjeev@gmail.com" className="hover:text-green-300 underline">
                akkanasanjeev@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;