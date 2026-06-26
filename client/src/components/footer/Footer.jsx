import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold">
          Tessy's Place
        </h2>

        <p className="mt-2 text-gray-400">
          The Queen of Jollof
        </p>

        <div className="flex gap-5 mt-6 text-2xl">
          <FaFacebook />
          <FaYoutube />
          <FaTiktok />
        </div>

        <p className="mt-8 text-gray-500 text-sm">
          © {new Date().getFullYear()} Tessy's Place. All rights reserved.
       </p>

    <p className="mt-2 text-gray-600 text-xs">
      Designed & Developed by Patricode
    </p>

      </div>
    </footer>
  );
}

export default Footer;