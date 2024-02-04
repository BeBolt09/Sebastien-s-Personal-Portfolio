import { useState } from "react";

const Navbar = () => {
  const [isResumeDownloadedVisible, setResumeDownloadedVisible] = useState(false);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Sebastien-Dupont-Resume.pdf';
    link.click();
    setResumeDownloadedVisible(true);
    setTimeout(() => {
        setResumeDownloadedVisible(false);
      }, 2500);
  };
  

  return (
    <nav className="bg-transparent p-0 flex items-center justify-between">
      <div className="flex items-center invisible md:visible lg:visible">
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
      <div className="flex items-center invisible md:visible lg:visible">
        <button onClick={handleDownload} className="flex text-dark py-2 rounded-md hover:h-10 font-mono">
          <img src="/resumeicon.svg" className="h-8 w-auto" />
        </button>
        {isResumeDownloadedVisible && (
        <div className="fixed top-20 right-7 p-2 border-2 border-gray-600 rounded-lg font-bold font-mono text-green-600">
          Downloaded Resume!
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
