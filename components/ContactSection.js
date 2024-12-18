'use client';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-8 md:px-14 pt-28">
      <div>
        <h2 className="border-l-4 border-green-400 pl-2 font-mono font-bold text-xl">
          5. Contact Me
        </h2>
        <p className="font-mono mt-4 max-w-xl leading-relaxed">
          If you’d like to collaborate, ask a question, or just want to say hello, feel free to reach out!
        </p>
      </div>

      <div className="lg:flex justify-between gap-8 mt-12">
        {/* Contact Details */}
        <div className="lg:w-1/2 space-y-6">
          <p className="border-l-4 border-green-400 pl-2 font-mono font-semibold text-xl">
            Contact Details
          </p>
          <div className="space-y-4 pt-2">
            <p>
              <span className="text-green-400 font-mono">&gt; Full Name:</span> Akkana Sanjeev
            </p>
            <p>
              <span className="text-green-400 font-mono">&gt; Role:</span> Full-Stack Developer
            </p>
            <p>
              <span className="text-green-400 font-mono">&gt; City:</span> Ongole, India
            </p>
            <p>
              <span className="text-green-400 font-mono">&gt; Email:</span>{' '}
              <a
                href="mailto:akkanasanjeev@gmail.com"
                className="hover:text-green-300 underline"
              >
                akkanasanjeev@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 space-y-6 mt-8 lg:mt-0">
          <p className="border-l-4 border-green-400 pl-2 font-mono font-semibold text-xl">
            Send me a message
          </p>
          <form
            action="mailto:akkanasanjeev@gmail.com"
            method="post"
            enctype="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="font-mono">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 mt-2 bg-gray-900 border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-mono font-semibold rounded"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;