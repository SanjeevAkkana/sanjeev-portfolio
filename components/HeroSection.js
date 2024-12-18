'use client';

const HeroSection = () => {
  return (
    <div className="w-full h-screen lg:flex justify-center items-center px-6 py-6 md:px-16">
      <div className="bg-white pr-6 h-full flex justify-center flex-col lg:w-2/3">
        {/* Hero Introduction Text */}
        <p className="font-mono">Hi, my name is</p>

        <p className="text-3xl md:text-6xl font-extrabold font-mono border-l-4 border-black px-4 mt-2">
          Akkana Sanjeev.
        </p>

        <p className="mt-4 font-mono">
          Full Stack MERN & React Native Developer | Aspiring Entrepreneur | Open to Freelance Projects & Startup Collaborations
        </p>

        {/* Resume Button to Download PDF */}
        <a
          href="/Sanjeev-Resume.pdf"  // Direct path from public folder
          download="Sanjeev-Resume"  // Specify the name for the downloaded file
          className="mt-8 font-mono border px-4 py-3 w-fit cursor-pointer border-l-4 border-black rounded-xl bg-green-950 text-white"
        >
          Resume/CV
        </a>
      </div>

      {/* Right Section for 'Connect, Build, Launch' */}
      <div className="hidden font-mono lg:flex text-center border-l-4 bg-green-950 border text-yellow-100 rounded-3xl h-96 border-black px-12 justify-center items-center flex-col w-1/3 z-0 py-24">
        <h2 className="text-3xl text-yellow-100 font-semibold mb-8">
          Connect, Build, Launch with Me!
        </h2>

        <div className="space-y-6">
          {/* Each button */}
          <div className="transform transition-all duration-300 hover:scale-110 hover:text-green-300">
            <div className="bg-yellow-100 text-green-950 font-bold rounded-full px-8 py-3 transition duration-300 ease-in-out shadow-lg">
              1. Connect
            </div>
          </div>

          <div className="transform transition-all duration-300 hover:scale-110 hover:text-green-300">
            <div className="bg-yellow-100 text-green-950 font-bold rounded-full px-8 py-3 transition duration-300 ease-in-out shadow-lg">
              2. Build
            </div>
          </div>

          <div className="transform transition-all duration-300 hover:scale-110 hover:text-green-300">
            <div className="bg-yellow-100 text-green-950 font-bold rounded-full px-8 py-3 transition duration-300 ease-in-out shadow-lg">
              3. Launch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;