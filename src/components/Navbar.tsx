// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="bg-transparent p-0 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/Logo.png" className="h-12 w-auto" />
      </div>
      <div className="flex items-center space-x-20 font-mono">
        <a href="#" className="text-dark hover:text-gray-300">Portfolio</a>
        <a href="#" className="text-dark hover:text-gray-300">About Me</a>
        <a href="#" className="text-dark hover:text-gray-300">Contact</a>
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
