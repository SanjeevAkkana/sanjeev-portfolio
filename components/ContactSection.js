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
              <span className="text-green-400 font-mono">&gt; Phone Number:</span> +91 7075972027
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
      </div>
    </section>
  );
};

export default ContactSection;