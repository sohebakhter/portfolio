export default function Header() {
  return (
    <header className="py-5 px-6 sm:px-10 lg:px-12 border-b border-gray-100 dark:border-slate-800">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-black font-['Playfair_Display'] text-[#0D9488] tracking-wider">
          MDF
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#0D9488] text-white text-sm font-semibold py-2 px-5 rounded-md hover:bg-teal-700 transition-colors">
            LET'S TALK
          </button>
        </div>
      </div>
    </header>
  )
}
