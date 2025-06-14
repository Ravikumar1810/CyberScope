export default function Navbar() {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-gray-800 px-6 py-4 border-b border-gray-700 fixed top-0 right-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-500">CyberScope</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-white hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-white hover:text-orange-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
