import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="bg-[#F0F9FF] dark:bg-[#0C1421] font-['Playfair_Display']">
      <footer className="bg-[#F0F9FF] dark:bg-[#0C1421] text-slate-600 dark:text-slate-300">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-[#0D9488]">SOHEB</h2>
                <p className="text-sm">
                  I've been working as web developer for the past two years, and
                  have experience in multiple frameworks.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#0D9488]">
                  Contact Details
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span>📞</span>
                    <span>+8801797101644</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>✉️</span>
                    <span>sohebakhterbadhan@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📍</span>
                    <span>Dhaka Bangladesh</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 lg:col-span-2">
                <h3 className="text-lg font-semibold text-[#0D9488]">
                  Newsletter
                </h3>
                <div className="flex items-center rounded-md bg-slate-200/60 dark:bg-slate-700/60 p-1">
                  <input
                    className="flex-grow bg-transparent border-0 py-2 px-3 text-sm placeholder-slate-500 dark:placeholder-slate-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button className="bg-[#0D9488] text-white p-2 rounded-md hover:bg-opacity-90 transition-colors">
                    <span>➤</span>
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/soheb-akhter"
                    className="text-[#0D9488] hover:text-opacity-80 transition-colors"
                    href="#"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/sohebakhter"
                    className="text-[#0D9488] hover:text-opacity-80 transition-colors"
                    href="#"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0D9488] text-white text-center py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm">© 2020 - 2022 All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
