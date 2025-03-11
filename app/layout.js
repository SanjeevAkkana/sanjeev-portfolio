import { Arsenal_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Using Arsenal font
const arsenalFont = Arsenal_SC({
  variable: "--font-arsenal-sc",
  subsets: ["latin"],
  weight: ["400", "700"], // Include font weights as needed
  display: "swap", // Improves font loading
});

export const metadata = {
  title: "Akkana Sanjeev | Portfolio",
  description:
    "Showcasing web development, UI/UX design, and creative solutions. A portfolio of clean and efficient projects.",
  keywords: "web developer, portfolio, Next.js, React.js, React Native, TailwindCss, ",
  authors: [{ name: "Akkana Sanjeev", url: "https://yourwebsite.com" }],
  themeColor: "#111827",
  openGraph: {
    title: "Akkana Sanjeev | Portfolio",
    description:
      "Explore projects and creative solutions crafted with modern tools like Next.js and Tailwind CSS.",
    url: "https://yourwebsite.com",
    siteName: "Your Name's Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${arsenalFont.variable} antialiased bg-gray-100`}
      >
         <div className="sticky top-0 pt-0 z-50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}