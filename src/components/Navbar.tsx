const Navbar = () => {
  return (
    <nav className="bg-transparent p-0 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/Logo.png" className="h-12 w-auto" />
      </div>
      <div className="flex items-center space-x-20 font-mono">
        <button className="text-dark hover:text-gray-300" onClick={() => window.scrollTo({ top: 240, behavior: "smooth" })}>
          Portfolio
        </button>
        <button className="text-dark hover:text-gray-300" onClick={() => window.scrollTo({ top: 960, behavior: "smooth" })}>
          About Me
        </button>
        <button className="text-dark hover:text-gray-300" onClick={() => window.scrollTo({ top: 2000, behavior: "smooth" })}>
          Contact
        </button>
      </div>
      <div className="flex items-center">
        <button className="flex text-dark py-2 rounded-md hover:h-10 font-mono">
          <img src="/resumeicon.svg" className="h-8 w-auto" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
